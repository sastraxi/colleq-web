<script lang="ts">
  import countBy from 'lodash/countBy'

  import 'carbon-components-svelte/css/white.css'
  import { Loading, Button, TextInput } from 'carbon-components-svelte'
  import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte'
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte'
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte'

  import Root from '../../layout/root.svelte'
  import Cards from '../../layout/Cards.svelte'
  import Card from '../../components/Card.svelte'

  import { workspaceSlug, connectedProviders, awaitingProviders, repositories } from './stores'

  import { goto } from '$app/navigation'
  import type { Provider } from '../../types'

  const startAuth = (provider: Provider) => {
    $awaitingProviders = [...$awaitingProviders, provider]
    goto(`${import.meta.env.VITE_AUTH_URL}/${provider}`)
  }

  const numReposByProvider = countBy($repositories, x => x.origin)
</script>

<Root>
  <h1>Connect your code</h1>
  <p>
    Looks like you named your workspace <b>{$workspaceSlug}</b>. Let's get your git repositories
    connected; select your source control provider below to get started.
  </p>
  <Cards>
    <Card title="Github">
      <LogoGithub size={24} slot="icon" />
      <p class="description">
        The complete developer platform to build, scale, and deliver secure software.
      </p>
      <svelte:fragment slot="action">
        {#if !numReposByProvider['github']}
          <Button size="small" kind="secondary" on:click={() => startAuth('github')}>Connect</Button
          >
        {:else}
          <div class="complete">
            {numReposByProvider['github']} repositories connected
            <Checkmark size={24} />
          </div>
        {/if}
      </svelte:fragment>
    </Card>
  </Cards>
  {#if $connectedProviders.length > 0}
    <Button icon={NextFilled} href="/init/connect-sources">Continue</Button>
  {/if}
</Root>

<style>
  b {
    font-weight: bold;
  }
  p.description {
    margin-top: 0.5rem;
    font-size: 13px;
    line-height: 18px;
  }

  .complete {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: #cfff5f;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
  }
</style>
