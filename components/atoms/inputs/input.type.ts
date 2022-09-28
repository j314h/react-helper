/**
 * type for input primary
 */
export type TinputPrimary = {
  id?: string
  name?: string
  type?: string
  value: string
  setValueInput: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  padding?: string
}
