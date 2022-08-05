import { persistent } from '@furudean/svelte-persistent-store';

export type Provider = 'github' | 'gitlab' | 'bitbucket';

export const workspaceName = persistent<string | null>({
  start_value: null,
  key: 'workspaceName',
  storage_type: 'localStorage',
})

export const awaitingProviders = persistent<Array<Provider>>({
  start_value: [],
  key: 'awaitingProviders',
  storage_type: 'localStorage',
})

export const connectedProviders = persistent<Array<Provider>>({
  start_value: [],
  key: 'awaitingProviders',
  storage_type: 'localStorage',
})
