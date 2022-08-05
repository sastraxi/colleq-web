<script lang="ts">
  import 'carbon-components-svelte/css/white.css'
  import { Loading, Button, TextInput } from 'carbon-components-svelte'
  import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte'
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte'
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte'

  import Root from '../../layout/root.svelte'
  import Cards from '../../layout/Cards.svelte'
  import ActionableCard from '../../components/ActionableCard.svelte'

  import { repositories, currentProvider, type Provider } from './stores'

  import { goto } from '$app/navigation'
</script>

<Root>
  <h1>Choose repositories</h1>
  {#if $repositories.length > 0}
    <Button icon={NextFilled}>Continue</Button>
  {/if}
</Root>

<style>
</style>
