import { setNamespace } from '../api';

/**
 * Bootstrap the application with the provided data.
 */
export default function bootstrap(data) {
  setNamespace(data?.api_namespace);
}
