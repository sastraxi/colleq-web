<script lang="ts">
  import { onMount } from 'svelte'

  import {
    currentProvider,
    accessTokens,
    awaitingProviders,
    connectedProviders,
    workspaceId,
    workspaceSlug,
  } from './init/stores'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import type { Provider } from '../types'
  import { gql, mutationStore, queryStore } from '@urql/svelte';
  import { createHasuraClient } from 'src/client';
  import { CreateWorkspaceDocument } from 'src/graphql-operations';

  const createWorkspace = (slug: string) => {
    return mutationStore({
      client: createHasuraClient(),
      query: CreateWorkspaceDocument,
      variables: { slug },
    })
  }

  onMount(() => {
    // N.B. we are receiving a response here from colleq/elefant's grant flow
    const providerParam = $page.url.searchParams.get('provider')
    const accessToken = $page.url.searchParams.get('accessToken')

    // we are here as part of an init/ auth flow, redirect to the correct next step
    if (providerParam) {
      const provider = providerParam as Provider
      if (!$awaitingProviders.includes(provider)) {
        console.error(`Was not expecting provider: ${provider}`)
      } else {
        // record this provider as connected
        $awaitingProviders = $awaitingProviders.filter((x) => x !== provider)
        $connectedProviders = $connectedProviders.includes(provider)
          ? $connectedProviders
          : [...$connectedProviders, provider]
        $accessTokens = { ...$accessTokens, [provider]: accessToken }
        $currentProvider = provider

        // create the workspace
        // TODO: auto-generate, this sucks
        if (!$workspaceId && $workspaceSlug) {
          createWorkspace($workspaceSlug).then(x => {
            // FIXME: you don't understand this paradigm enough
            // read https://stackblitz.com/edit/vitejs-vite-2ssvxj?file=src%2Fgraphql%2Fschema.json
            // then come back
          })
        }

        // next step of onboarding
        return goto('/init/choose-repositories')
      }
    }

    return goto('/')
  })
</script>

<div>Checking auth...</div>
