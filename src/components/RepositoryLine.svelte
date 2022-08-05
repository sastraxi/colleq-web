<script lang="ts">
  import Cloud from "carbon-icons-svelte/lib/Cloud.svelte";
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import type { Repository } from '../types';

  export let repository: Repository

  let Icon = Cloud
  if (repository.origin === 'github') {
    Icon = LogoGithub
  }
</script>

<div class="repo">
  <Icon size={24} />
  <span class="details">
    {repository.owner} / {repository.name}
  </span>
  <div class="spacer"></div>
  <slot />
</div>

<style>
  .repo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .details {
    margin-left: 0.5rem;
  }

  .spacer {
    flex: 1;
  }

  .repo + .repo {
    border-top: 1px solid #4f4f4f;
  }
</style>
