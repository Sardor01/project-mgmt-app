export type NonNullable<T> = Exclude<T, null | undefined>

export interface SelectOption {
  label: string
  value: string | number
}
