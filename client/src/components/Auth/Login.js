import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Make a POST request to your backend for login
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Login was successful, you can redirect the user or update the UI
          console.log('Login successful');
        } else {
          // Handle login error, show an error message, etc.
          console.error('Login failed');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
