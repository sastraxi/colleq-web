<script lang="ts">
  import { Button } from 'carbon-components-svelte'
import type { ButtonProps } from 'carbon-components-svelte/types/Button/Button.svelte';
  import NextOutline from 'carbon-icons-svelte/lib/NextOutline.svelte'
  import { createEventDispatcher } from 'svelte'

  export let title: string
  export let actionText: string = 'Select'
  export let actionKind: ButtonProps['kind'] = 'secondary'

  const dispatch = createEventDispatcher()

  const onClick = () => dispatch('click')
</script>

<div class="source">
  <div class="top-row">
    <h1>{title}</h1>
    <slot name="icon" />
  </div>
  <slot />
  <div class="spacer" />
  <Button size="small" kind={actionKind} on:click={onClick}>
    {actionText}
  </Button>
</div>

<style>
  .source {
    border: 1px solid #4f4f4f;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    padding: 1rem;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
  }

  .top-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  h1 {
    line-height: 24px;
    font-weight: bold;
    font-size: 18px;
  }

  .spacer {
    margin-top: 1rem;
  }
</style>
