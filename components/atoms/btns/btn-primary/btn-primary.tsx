import React from 'react'
import { TbtnPrimary } from '../btn.type'
import './btn-primary.css'

/**
 * btn primary
 * @param children: JSX.Element | JSX.Element[] | string;
 * @param submit?: boolean | undefined;
 * @param click?: (() => void) | undefined;
 * @returns
 */
export function BtnPrimary({ children, submit, click }: TbtnPrimary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
        btn-primary
      `}>
      {children}
    </button>
  )
}
