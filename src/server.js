import { createServer } from 'miragejs';
import { DEFAULT_NAMESPACE } from './api';

export function makeServer({
  environment = 'test',
  namespace = null,
}) {
  return createServer({
    environment,
    routes() {
      this.namespace = namespace || DEFAULT_NAMESPACE;
      this.post('say-hello', (schema, request) => {
        let { name } = JSON.parse(request.requestBody);
        let message = name ? `Hello ${name}!!` : 'You forgot to tell me your name!';
        return {
          success: true,
          data: { message },
          error: null,
        };
      });
    },
  });
}
