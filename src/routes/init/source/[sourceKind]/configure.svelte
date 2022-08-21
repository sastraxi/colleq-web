<script>
  import { page } from '$app/stores'
  $: sourceKind = $page.params.sourceKind.replaceAll('-', ' ')
</script>

<h1>Configure {sourceKind}</h1>
