import { isString } from './common'

class YAlertError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'YAlertError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new YAlertError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new YAlertError(`[${scope}] ${message}`)
      : scope
    // eslint-disable-next-line no-console
    console.warn(error)
  }
}
