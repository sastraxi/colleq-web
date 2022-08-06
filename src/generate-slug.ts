const adjectives = [
  'thirsty',
  'little',
  'giant',
  'sudden',
  'terse',
  'cryptic',
  'careful',
  'cool',
  'artistic',
  'beautiful',
  'dangerous',
  'early',
  'fantastic',
  'hungry',
  'lucky'
]

const nouns = [
  'cryptid',
  'hippo',
  'impala',
  'leopard',
  'tiger',
  'elephant',
  'zebra',
  'parakeet',
  'muskrat',
  'penguin',
  'ape',
  'banana',
  'horse',
  'fish',
]

const choose = <T>(arr: Array<T>): T => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

const chooseStr = (str: string) => {
  const index = Math.floor(Math.random() * str.length)
  return str[index]
}

const CHARS = "abcdefghijklmnopqrstuvxwyz0123456789"

const randomChars = (length: number, chars = CHARS) =>
  [...Array(length).keys()].map(() => chooseStr(chars)).join('')

const generateSlug = (randomCharsLength = 4) => {
  return `${choose(adjectives)}-${choose(nouns)}-${randomChars(randomCharsLength)}`
}

export default generateSlug
