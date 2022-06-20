import generatedPages from 'virtual:generated-pages';

export function trailingSlash (str: string) {
  return str.endsWith('/') ? str : str + '/'
}

export const generatedRoutes = generatedPages.map(route => ({
  ...route,
  path: trailingSlash(route.path),
}))
