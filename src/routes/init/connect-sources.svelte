<script lang="ts">
  import 'carbon-components-svelte/css/white.css'
  import { Loading, Button, TextInput } from 'carbon-components-svelte'
  import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte'
  import LogoSlack from 'carbon-icons-svelte/lib/LogoSlack.svelte'
  import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte'
  import NextFilled from 'carbon-icons-svelte/lib/NextFilled.svelte'

  import Root from '../../layout/root.svelte'
  import Cards from '../../layout/Cards.svelte'
  import Card from '../../components/Card.svelte'

  import { goto } from '$app/navigation'
</script>

<Root>
  <h1>Connect conversations</h1>
  <p>
    Great! You've imported a few repositories to your new workspace (we're indexing them in the
    background right now). Now, let's connect some conversation sources.
  </p>
  <Cards>
    <Card title="Github Discussions">
      <LogoGithub size={24} slot="icon" />
      <p class="description">
        GitHub Discussions is a collaborative communication forum for the community around an open
        source or internal project.
      </p>
      <Button size="small" slot="action">Connect</Button>
    </Card>
    <Card title="Github Pull Requests">
      <LogoGithub size={24} slot="icon" />
      <p class="description">
        Pull Requests let you discuss and review potential changes with collaborators before code is merged into the base branch.
      </p>
      <Button size="small" slot="action">Connect</Button>
    </Card>
    <Card title="Github Issues">
      <LogoGithub size={24} slot="icon" />
      <p class="description">
        Issues let you track your work on GitHub, where development happens. 
      </p>
      <Button size="small" slot="action">Connect</Button>
    </Card>
    <Card title="Slack">
      <LogoSlack size={24} slot="icon" />
      <p class="description">
        See conversations that reference code via URLs embedded in messages.
      </p>
      <Button size="small" slot="action">Connect</Button>
    </Card>
    <Card title="Discord">
      <LogoDiscord size={24} slot="icon" />
      <p class="description">
        See conversations that reference code via URLs embedded in messages.
      </p>
      <Button size="small" slot="action">Connect</Button>
    </Card>
  </Cards>
</Root>

<style>
  p.description {
    margin-top: 0.5rem;
    font-size: 13px;
    line-height: 18px;
  }
</style>
