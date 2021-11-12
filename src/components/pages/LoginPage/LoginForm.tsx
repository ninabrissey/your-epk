import { useState, useEffect } from 'react';
import { postUserData } from '../../../utils/apiCalls';
import { Link } from 'react-router-dom';
import { UserData } from '../../../types';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

const LoginForm = ({ setCurrUser, setIsRegistering, setIsLoggingIn } : any) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleClick = () => {
    let currentUser = {
      email: email,
      password: password
    }
    
    postUserData('https://epk-be.herokuapp.com/api/v1/sessions', currentUser)
    .then(res => {
			const cookie: any = Cookies.set('csrf-token', res.data.attributes.csrf_token)
		})
	
  }

  return (
    <form className='login-container'>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<TextField
					id="outlined-basic"
					label="Email"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
      	<TextField
					id="outlined-basic"
					label="Password"
					variant="outlined"
					size="small"
					margin="dense"
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
        <Link to='/dashboard/1' className='login-btn'>
          <Button variant="text" onClick={() => {handleClick(); setIsLoggingIn(false)}}>
            Login
          </Button>
        </Link>
        <Button variant="text" onClick={() => {setIsRegistering(false); setIsLoggingIn(false)} }>
					Register
				</Button>
      </FormControl>  
    </form>
  )
}


export default LoginForm;