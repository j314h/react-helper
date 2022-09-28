import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkPrimary } from '../link.type'

/**
 * link text primary
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param link string;
 * @param click? (() => void) | undefined;
 * @param textSize? string | undefined;
 * @returns
 */
export function LinkPrimary({ children, link, click, textSize }: TlinkPrimary) {
  return (
    <NavLink
      to={link}
      onClick={click}
      end
      className={({ isActive }) =>
        isActive
          ? `${
              textSize ?? 'link-primary-size-text'
            } link-primary link-primary-active`
          : `${
              textSize ?? 'link-primary-size-text'
            } link-primary link-primary-noactive`
      }>
      {children}
    </NavLink>
  )
}
