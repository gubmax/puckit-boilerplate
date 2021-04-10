import s from './styles'

export enum HeadingTags {
  H1 = 'h1',
  H2 = 'h2'
}

export const stylesByTag = new Map([
  [HeadingTags.H1, s.h1],
  [HeadingTags.H2, s.h2],
])
