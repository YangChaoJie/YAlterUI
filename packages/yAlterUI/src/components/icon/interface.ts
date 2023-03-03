export interface IconOptions extends Record<string, any> {
  color?: string
  size?: string
  loading?: boolean
  icon?: Object
}
export type IconMinorProps = Pick<IconOptions, 'size' | 'color' | 'loading'>
