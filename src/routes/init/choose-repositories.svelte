<script lang="ts">
  import 'carbon-components-svelte/css/white.css'

  import { Loading, Button, TextInput } from 'carbon-components-svelte'
  import { queryStore, gql } from '@urql/svelte'

  import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte'
  import Add from 'carbon-icons-svelte/lib/Add.svelte'
  import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte'

  import Root from '../../layout/root.svelte'
  import List from '../../layout/List.svelte'

  import { repositories, currentProvider, accessTokens } from './stores'
  import { createGithubClient } from '../../client'

  import type { Repository } from '../../types'
  import RepositoryLine from '../../components/RepositoryLine.svelte'

  type GithubRepoNode = {
    nameWithOwner: string
    description?: string
  }

  const repoQuery = queryStore({
    client: createGithubClient($accessTokens[$currentProvider!]!),
    query: gql`
      query {
        viewer {
          repositories(last: 12) {
            nodes {
              description
              nameWithOwner
            }
          }
        }
      }
    `
  })

  const repositoryFromGithub = (repoNode: GithubRepoNode): Repository => {
    const [owner, name] = repoNode.nameWithOwner.split('/')
    return {
      origin: 'github',
      name,
      owner
    }
  }

  const repoEquality = (repo: Repository) => (test: Repository) =>
    repo.name === test.name && repo.owner === test.owner && repo.origin === test.origin

  const isSelected = (repo: Repository) => {
    return $repositories.some(repoEquality(repo))
  }

  const toggle = (repo: Repository) => {
    if (isSelected(repo)) {
      const predicate = repoEquality(repo)
      $repositories = $repositories.filter((x) => !predicate(x))
    } else {
      $repositories = [...$repositories, repo]
    }
  }

  $: searchResults = $repoQuery.data?.viewer.repositories.nodes.map(repositoryFromGithub)
</script>

<Root>
  <div class="flex-header">
    <h1>Choose repositories</h1>
    <div class="spacer" />
    {#if $repositories.length > 0}
      <Button icon={ArrowRight}>Continue</Button>
    {/if}
  </div>

  <div class="layout">
    <div class="left">
      {#if $repoQuery.fetching}
        <p>Loading...</p>
      {:else if $repoQuery.error}
        <p>Oh no... {$repoQuery.error.message}</p>
      {:else}
        <List>
          {#key $repositories}
            <!-- FIXME: wasteful. how else can we let svelte know? -->
            {#each searchResults as repo}
              <RepositoryLine repository={repo}>
                <Button
                  size="small"
                  kind={isSelected(repo) ? 'danger' : 'secondary'}
                  icon={isSelected(repo) ? TrashCan : Add}
                  iconDescription={isSelected(repo)
                    ? `Remove ${repo.owner}/${repo.name}`
                    : `Add ${repo.owner}/${repo.name}`}
                  on:click={() => toggle(repo)}
                />
              </RepositoryLine>
            {/each}
          {/key}
        </List>
      {/if}
    </div>
    <div class="right">
      <p>{$repositories.length} repositories selected.</p>
      <List>
        {#each $repositories as repo}
          <RepositoryLine repository={repo}>
            <Button
              size="small"
              kind="danger"
              icon={TrashCan}
              iconDescription={`Remove ${repo.owner}/${repo.name}`}
              on:click={() => toggle(repo)}
            />
          </RepositoryLine>
        {/each}
      </List>
    </div>
  </div>
</Root>

<style>
  .flex-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  .spacer {
    min-width: 2rem;
  }

  .layout {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: 6fr 5fr;
    min-width: 800px; /* FIXME: mobile view */
  }

  .right p {
    margin-bottom: 1rem;
  }
</style>
