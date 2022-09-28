import React from 'react'
import { TbtnTextPrimary } from '../btn.type'
import './btn-text-primary.css'

export function BtnTextPrimary({ children, click, submit }: TbtnTextPrimary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
        btn-text-primary
      `}>
      {children}
    </button>
  )
}
