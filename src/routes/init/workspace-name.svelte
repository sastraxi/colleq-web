<script lang="ts">
  import 'carbon-components-svelte/css/white.css'
  import { Loading, Button, TextInput } from 'carbon-components-svelte'
  import Reset from 'carbon-icons-svelte/lib/Reset.svelte'
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte'
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte'
  import Root from '../../layout/root.svelte'

  import { goto } from '$app/navigation'

  import { workspaceSlug } from './stores'
  import generateSlug from '../../generate-slug'

  let name = generateSlug()
  const regenerate = () => {
    name = generateSlug()
  }

  const onContinue = () => {
    $workspaceSlug = name
    goto('./connect-code')
  }
</script>

<Root>
  <h1>Name your workspace</h1>
  <div>
    <TextInput value={name} />
    <Button size="field" icon={Reset} on:click={regenerate} />
    <i>
      <!-- <Checkmark size={32} /> -->
      <Loading withOverlay={false} small active={false} />
    </i>
  </div>

  <Button icon={NextFilled} on:click={onContinue}>Continue</Button>
</Root>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  i {
    margin-left: 1em;
  }
</style>
