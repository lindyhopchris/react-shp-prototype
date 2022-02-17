export default async function sayHello(name) {
  const response = await fetch('/ajax-trade-in/say-hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  const json = await response.json();

  if (true === json.success) {
    return json?.data?.message;
  }

  throw new Error('Failed to say hello.');
}
