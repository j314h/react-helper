import React from 'react'
import { TbtnIconPrimary } from '../btn.type'
import './btn-icon-primary.css'

/**
 * btn icon
 * @param children: JSX.Element | JSX.Element[] | string;
 * @param submit?: boolean | undefined;
 * @param textColorHover?: string | undefined;
 * @param click?: (() => void) | undefined;
 * @returns
 */
export function BtnIconPrimary({
  children,
  submit,
  textColorHover,
  click,
}: TbtnIconPrimary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`
        btn-icon-primary
        ${textColorHover ?? 'hover:text-action'}
      `}
      onClick={click}>
      {children}
    </button>
  )
}
