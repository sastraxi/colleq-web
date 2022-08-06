import { persistent } from '@furudean/svelte-persistent-store';
import type { Provider, Repository } from '../../types';

export const workspaceId = persistent<number | null>({
  start_value: null,
  key: 'workspaceId',
  storage_type: 'localStorage',
})

export const workspaceSlug = persistent<string | null>({
  start_value: null,
  key: 'workspaceSlug',
  storage_type: 'localStorage',
})

export const awaitingProviders = persistent<Array<Provider>>({
  start_value: [],
  key: 'awaitingProviders',
  storage_type: 'localStorage',
})

export const connectedProviders = persistent<Array<Provider>>({
  start_value: [],
  key: 'connectedProviders',
  storage_type: 'localStorage',
})

/**
 * The provider we are currently choosing repostiories for.
 */
export const currentProvider = persistent<Provider | null>({
  start_value: null,
  key: 'currentProvider',
  storage_type: 'localStorage',
})

export const repositories = persistent<Array<Repository>>({
  start_value: [],
  key: 'repositories',
  storage_type: 'localStorage',
})

export const accessTokens = persistent<Partial<Record<Provider, string>>>({
  start_value: {},
  key: 'accessTokens',
  storage_type: 'localStorage',
})
