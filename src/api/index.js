let namespace;

export const DEFAULT_NAMESPACE = '/ajax-trade-in';

export function setNamespace(value) {
  namespace = value || DEFAULT_NAMESPACE;
}

export function url(path) {
  if (namespace) {
    return `${namespace}/${path}`;
  }

  throw new Error('API namespace has not been set.');
}
