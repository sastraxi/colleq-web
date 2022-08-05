<script lang="ts">
  import 'carbon-components-svelte/css/white.css';
  import { Loading, Button, TextInput } from 'carbon-components-svelte';
  import Reset from 'carbon-icons-svelte/lib/Reset.svelte';
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte';
  import Root from '../../layout/root.svelte';

  import { workspaceName } from './stores'

</script>

<Root>
  <h1>Connect your code</h1>
  <div>
    Looks like you named your workspace {$workspaceName}
  </div>
  <Button icon={NextFilled}>Continue</Button>
</Root>

<style>
</style>
