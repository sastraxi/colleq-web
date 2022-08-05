import { persistent } from '@furudean/svelte-persistent-store';
import { writable } from 'svelte/store';

export type Provider = 'github' | 'gitlab' | 'bitbucket';

export type Repository = {
  origin: Provider
  owner: string
  name: string
}

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
  key: 'connectedProviders',
  storage_type: 'localStorage',
})

/**
 * The provider we are currently choosing repostiories for.
 * We don't need to persist this (maybe we should anyway...)
 */
export const currentProvider = writable<Provider | null>(null)

export const repositories = persistent<Array<Repository>>({
  start_value: [],
  key: 'repositories',
  storage_type: 'localStorage',
})
