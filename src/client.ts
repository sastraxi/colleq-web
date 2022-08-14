import { createClient } from '@urql/svelte';

export const createGithubClient = (accessToken: string) =>
  createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: () => ({
      headers: { authorization: `Bearer ${accessToken}` },
    }),
  });

export const createHasuraClient = () =>
  createClient({
    url: 'http://localhost:8080/v1/graphql',
    fetchOptions: {
      credentials: 'include',
    }
  });
