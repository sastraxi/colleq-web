<div class="box">
  <slot />
</div>

<style>
  .box {
    min-width: 320px;
    max-width: 960px;
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
</style>
