<script lang="ts">
  import 'carbon-components-svelte/css/white.css';
  import { Loading, Button, TextInput } from 'carbon-components-svelte';
  import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte';

  import Root from '../../layout/root.svelte';
  import Cards from '../../layout/Cards.svelte';
  import ActionableCard from '../../components/ActionableCard.svelte';

  import { workspaceName, connectedProviders } from './stores';

  import { goto } from '$app/navigation';

  const githubAuth = () => {
    // TODO: serialize store state to localStorage
    const params = new URLSearchParams({
      client_id: '5f04fa393283e9aff4a0',
      // redirect_uri: 'localhost:5173',
      redirect_uri: 'https://colleq-dev.firebaseapp.com/__/auth/handler',
      scope: ['user:email', 'repo', 'read:org', 'write:discussion'].join(' ')
    });
    goto(`https://github.com/login/oauth/authorize?${params.toString()}`);
  };
</script>

<Root>
  <h1>Connect your code</h1>
  <p>
    Looks like you named your workspace <b>{$workspaceName}</b>. Let's get your git repositories
    connected; select your source control provider below to get started.
  </p>
  <Cards>
    <ActionableCard title="Github" actionText="Connect" on:click={githubAuth}>
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
