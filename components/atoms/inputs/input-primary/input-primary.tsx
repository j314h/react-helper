import React from 'react'
import { TinputPrimary } from '../input.type'
import './input-primary.css'

/**
 * input primary
 * @param id?: string | undefined;
 * @param name?: string | undefined;
 * @param type?: string | undefined;
 * @param value: string;
 * @param setValueInput: React.Dispatch<React.SetStateAction<string>>;
 * @param placeholder?: string | undefined;
 * @param required?: boolean | undefined;
 * @param disabled?: boolean | undefined;
 * @returns
 */
export function InputPrimary({
  id,
  name,
  type,
  value,
  setValueInput,
  placeholder,
  required,
  disabled,
  padding,
}: TinputPrimary) {
  return (
    <input
      className={`
      input-primary
      ${padding ?? 'py-2 pl-4 pr-4'}
      `}
      id={id}
      name={name}
      type={type ?? 'text'}
      value={value}
      onChange={e => setValueInput(e.target.value)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  )
}
