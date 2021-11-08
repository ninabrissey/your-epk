import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { UserData } from '../../../types';

const LoginForm = ({ setCurrUser, setIsRegistering } : any) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
        <Button variant="text" onClick={setCurrUser}>
					Login
				</Button>
        <Button variant="text" onClick={() => setIsRegistering(true)}>
					Register
				</Button>
      </FormControl>  
    </form>
  )
}


export default LoginForm;