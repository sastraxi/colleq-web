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
import { gql, queryStore } from '@urql/svelte';

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
        if (!$workspaceId) {
          const repoQuery = queryStore({
            client: createHasuraClient(),
            query: gql`
              mutation CreateWorkspace($slug: String!) {
                createWorkspaceOne({
                  object: {
                    slug: $slug
                  }
                })
              }
            `
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
