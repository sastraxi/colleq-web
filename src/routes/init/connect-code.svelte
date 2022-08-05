<script lang="ts">
  import 'carbon-components-svelte/css/white.css'
  import { Loading, Button, TextInput } from 'carbon-components-svelte'
  import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte'
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte'
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte'

  import Root from '../../layout/root.svelte'
  import Cards from '../../layout/Cards.svelte'
  import ActionableCard from '../../components/ActionableCard.svelte'

  import { workspaceName, connectedProviders, awaitingProviders, type Provider } from './stores'

  import { goto } from '$app/navigation'

  const startAuth = (provider: Provider) => {
    // TODO: serialize store state to localStorage
    goto(`${import.meta.env.VITE_AUTH_URL}/${provider}`)
  }
</script>

<Root>
  <h1>Connect your code</h1>
  <p>
    Looks like you named your workspace <b>{$workspaceName}</b>. Let's get your git repositories
    connected; select your source control provider below to get started.
  </p>
  <Cards>
    <ActionableCard title="Github" actionText="Connect" on:click={() => startAuth('github')}>
      <LogoGithub size={24} slot="icon" />
    </ActionableCard>
  </Cards>
  {#if $connectedProviders.length > 0}
    <Button icon={NextFilled}>Continue</Button>
  {/if}
</Root>

<style>
  b {
    font-weight: bold;
  }
</style>
