import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { UserData } from '../../../types';

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true)
  const [isRegistering, setIsRegistering] = useState<boolean>(true)

  return (
    <section>
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