import React from 'react'
import { TbtnTextPrimary } from '../btn.type'
import './btn-text-primary.css'

/**
 * btn text primary
 * @param children: JSX.Element | JSX.Element[] | string;
 * @param submit?: boolean | undefined;
 * @param textSize?: string | undefined;
 * @param click?: (() => void) | undefined;
 * @returns
 */
export function BtnTextPrimary({
  children,
  submit,
  textSize,
  click,
}: TbtnTextPrimary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
        btn-text-primary
        ${textSize}
      `}>
      {children}
    </button>
  )
}
