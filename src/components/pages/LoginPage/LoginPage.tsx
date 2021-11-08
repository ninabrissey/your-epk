import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { UserData } from '../../../types';

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true)
  const [isRegistering, setIsRegistering] = useState<boolean>(false)

  return (
    <section>
      {!isRegistering && <LoginForm setIsRegistering={setIsRegistering} />}
      {isRegistering && <RegisterForm />}
    </section>
  )
}


export default LoginPage;