import generatedPages from 'virtual:generated-pages';

export function trailingSlash (str: string) {
  return str.endsWith('/') ? str : str + '/'
}

export const generatedRoutes = generatedPages.map(route => ({
  ...route,
  path: trailingSlash(route.path),
}))

export function rpath (path = '') {
  // const locale = preferredLocale()
  const [url, hash] = path.split('#')

  return [
    '',
    ...url.split('/').filter(p => !!p),
    hash ? `#${hash}` : null,
  ].filter(v => v != null).join('/')
}
