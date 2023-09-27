import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate  } from 'react-router-dom'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Make a POST request to your backend for login
    axios.post('/api/users/login', { email, password })
      .then((response) => {
        if (response.status === 200) {
          // Login was successful, you can redirect the user or update the UI
          console.log('Login successful');
          <Navigate to="/" />
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
    <Card color="transparent" className="flex items-center justify-center h-[80vh]" shadow={false}>
    <Typography variant="h3" color="blue-gray">
      Sign In
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Enter your details to login.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Email" onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <Checkbox
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button className="mt-6" fullWidth onClick={handleLogin}> {/* onClick={handleLogin} */}
        Sign In
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Don't have an account?{" "}
        <a href="#" className="font-medium text-gray-900">
        <Link to="/register">Register</Link>
        </a>
      </Typography>
    </form>
  </Card>
  );
}

export default Login;
