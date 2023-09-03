import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Make a POST request to your backend for registration
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.status === 201) {
          // Registration was successful, you can redirect the user or update the UI
          console.log('Registration successful');
        } else {
          // Handle registration error, show an error message, etc.
          console.error('Registration failed');
        }
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
