<script lang="ts">
  import { onMount } from 'svelte'

  import {
    currentProvider,
    accessTokens,
    awaitingProviders,
    connectedProviders
  } from './init/stores'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import type { Provider } from '../types'

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
        console.log(`Got expected provider: ${provider}`)
        // record this provider as connected
        $awaitingProviders = $awaitingProviders.filter((x) => x !== provider)
        $connectedProviders = $connectedProviders.includes(provider)
          ? $connectedProviders
          : [...$connectedProviders, provider]
        $accessTokens = { ...$accessTokens, [provider]: accessToken }
        $currentProvider = provider
        return goto('/init/choose-repositories')
      }
    }

    return goto('/')
  })
</script>

<div>Checking auth...</div>
