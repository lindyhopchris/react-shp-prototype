import { createServer } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'ajax-trade-in';
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
