<script lang="ts">
  import { onMount } from 'svelte'

  import {
    currentProvider,
    accessTokens,
    awaitingProviders,
    connectedProviders,
    workspaceId,
    workspaceSlug
  } from './init/stores'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import type { Provider } from '../types'
  import { gql, mutationStore, queryStore } from '@urql/svelte'
  import { createHasuraClient } from 'src/client'
  import { CreateWorkspaceDocument, type CreateWorkspaceMutation } from 'src/graphql-operations'
  import type { OperationResultStore } from '@urql/svelte/dist/types/common'

  const client = createHasuraClient()
  const createWorkspace = (slug: string): Promise<number> =>
    client.mutation(CreateWorkspaceDocument, { slug })
      .toPromise()
      .then((result) => {
        const { data, error } = result
        if (error) throw error;
        return data?.insertWorkspaceOne?.id!
      })

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

        // init: create the workspace
        if (!$workspaceId && $workspaceSlug) {
          return createWorkspace($workspaceSlug).then((id) => {
            $workspaceId = id
            return goto('/init/choose-repositories')
          })
        }

        // anywhere else: I'm not sure!
        return goto('/whoknows')
      }
    }

    return goto('/')
  })
</script>

<div>Checking auth...</div>
