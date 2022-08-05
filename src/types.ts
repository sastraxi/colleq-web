export type Provider = 'github' | 'gitlab' | 'bitbucket';

export type Repository = {
  origin: Provider
  owner: string
  name: string
}
