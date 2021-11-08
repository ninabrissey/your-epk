import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginPage = () => {

  return (
    <section>
      <LoginForm /> 
      <RegisterForm />
    </section>
  )
}


export default LoginPage;