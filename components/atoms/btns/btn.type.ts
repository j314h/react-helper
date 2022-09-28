/**
 * type btn primary
 */
export type TbtnPrimary = {
  children: JSX.Element | JSX.Element[] | string
  submit?: boolean
  click?: () => void
}

/**
 * type of btn icon
 */
export type TbtnIconPrimary = {
  children: JSX.Element | JSX.Element[] | string
  submit?: boolean
  textColorHover?: string
  click?: () => void
}

/**
 * type of btn text primary
 */
export type TbtnTextPrimary = {
  children: JSX.Element | JSX.Element[] | string
  submit?: boolean
  textSize?: string
  click?: () => void
}
