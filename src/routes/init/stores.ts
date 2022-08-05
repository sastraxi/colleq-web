import { writable } from 'svelte/store'

export const workspaceName = writable<string | null>(null)
