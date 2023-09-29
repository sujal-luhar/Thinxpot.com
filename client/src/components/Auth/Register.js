import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import api from "../../api/axios";


function Register() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Make a POST request to your backend for registration
    axios.post('/api/users/register', { first_name, last_name, username, email, password, confirm_password })
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
    <div className='w-screen h-[80vh] mt-20'>
    <Card color="transparent" className="flex items-center justify-center " shadow={false}>
      <Typography variant="h3" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Firstname" onChange={(e) => setFirstName(e.target.value)} />
          <Input size="lg" label="Lastname" onChange={(e) => setLastName(e.target.value)} />
          <Input size="lg" label="Username" onChange={(e) => setName(e.target.value)} />
          <Input size="lg" label="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" size="lg" label="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
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
        <Button className="mt-6" fullWidth onClick={handleRegister}> {/* onClick={handleRegister} */}
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            <Link to="/login">Sign In</Link>
          </a>
        </Typography>
      </form>
    </Card>
    </div>
  );
}

export default Register;
