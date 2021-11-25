import { useState } from 'react';
import { UserData } from '../../../types';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true)
  const [isRegistering, setIsRegistering] = useState<boolean>(true)

  return (
    <section className='login-page'>
      {!isRegistering && isLoggingIn && <div>
        <p>Thank you for registering with Your EPK</p>
        <p>Please login to go to your new account</p>
      </div>}
      {!isRegistering && !isLoggingIn && <RegisterForm setIsRegistering={setIsRegistering} setIsLoggingIn={setIsLoggingIn} />}
      {isRegistering && isLoggingIn && <LoginForm setIsRegistering={setIsRegistering} setIsLoggingIn={setIsLoggingIn} />}
      {!isRegistering && isLoggingIn && <LoginForm setIsRegistering={setIsRegistering} setIsLoggingIn={setIsLoggingIn} />}
    </section>
  )
}


export default LoginPage;