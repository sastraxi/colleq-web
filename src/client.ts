import { createClient } from '@urql/svelte';

export const createGithubClient = (accessToken: string) =>
  createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: () => ({
      headers: { authorization: `Bearer ${accessToken}` },
    }),
  });
