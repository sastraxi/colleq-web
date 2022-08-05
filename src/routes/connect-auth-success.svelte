<script lang="ts">
	import { onMount } from 'svelte';

  import { currentProvider, awaitingProviders, connectedProviders, type Provider } from './init/stores'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  onMount(() => {
    const providerParam = $page.url.searchParams.get('provider')

    // we are here as part of an init/ auth flow, redirect to the correct next step
    if (providerParam) {
      const provider = providerParam as Provider
      if (!$awaitingProviders.includes(provider)) {
        console.error(`Was not expecting provider: ${provider}`)
      } else {
        console.log(`Got expected provider: ${provider}`)
        // record this provider as connected
        $awaitingProviders = $awaitingProviders.filter(x => x !== provider)
        $connectedProviders = [...$connectedProviders, provider]
        $currentProvider = provider
        return goto('/init/choose-repositories')
      }
    }

    return goto('/')
  })
</script>

<div>
  Checking auth...
</div>
