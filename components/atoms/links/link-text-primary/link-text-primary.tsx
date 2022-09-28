import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkTextPrimary } from '../link.type'
import './link-text-primary.css'

/**
 *
 * @param children: JSX.Element | JSX.Element[] | string;
 * @param link: string;
 * @param textSize?: string | undefined;
 * @param click?: (() => void) | undefined;
 * @returns
 */
export function LinkTextPrimary({
  children,
  link,
  textSize,
  click,
}: TlinkTextPrimary) {
  return (
    <NavLink
      to={link}
      onClick={click}
      className={`
        link-text-primary
        ${textSize}
      `}>
      {children}
    </NavLink>
  )
}
