import { useState } from 'react';
import sayHello from '../api/say-hello';

function Step2() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(evt) {
    evt.preventDefault();
    setMessage('');
    let message = await sayHello(name);
    setMessage(message);
  }

  function handleNameChange(evt) {
    let { value } = evt.target;
    setName(value);
  }

  return (
    <div className="Step2">
      <h1>Step 2</h1>
      <p>This is the second step. Here you can say hello!</p>

      {message && <div className="alert alert-success">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">What's your name?</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={handleNameChange}
          />
        </div>
        <button type="submit" className="btn btn-success">Say Hello</button>
      </form>
    </div>
  );
}

export default Step2;
