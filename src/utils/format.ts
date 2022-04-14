
export const camelize = (str: string): string =>
str.replace(camelizeRE, (_, c) => c.toUpperCase());

const camelizeRE = /-(\w)/g;
