import { writable } from 'svelte/store'

export type Provider = 'github' | 'gitlab' | 'bitbucket'

export const workspaceName = writable<string | null>(null)
export const connectedProviders = writable<Array<Provider>>([])
