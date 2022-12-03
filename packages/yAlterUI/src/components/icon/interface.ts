export interface IconOptions extends Record<string, any> {
  color?: string
  size?: string
  icon?: Object
}
export type IconMinorProps = Pick<IconOptions, 'size' | 'color'>
