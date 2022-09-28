/**
 * type for link text primary
 */
export type TlinkTextPrimary = {
  children: JSX.Element | JSX.Element[] | string
  link: string
  textSize?: string
  click?: () => void
}

/**
 * type of link primary
 */
export type TlinkPrimary = {
  children: JSX.Element | JSX.Element[]
  link: string
  textSize?: string
  click?: () => void
}
