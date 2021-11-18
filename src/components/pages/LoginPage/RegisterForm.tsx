import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const RegisterForm = ({ setIsRegistering, setIsLoggingIn } : any) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')

  return (
    <form className='login-container'>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<TextField
					id='outlined-basic'
					label='First Name'
					variant='outlined'
					size='small'
					margin='dense'
					type='text'
					name='firstName'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
        <TextField
					id='outlined-basic'
					label='Last Name'
					variant='outlined'
					size='small'
					margin='dense'
					type='text'
					name='lastName'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
				/>
        <TextField
					id='outlined-basic'
					label='Email Address'
					variant='outlined'
					size='small'
					margin='dense'
					type='text'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
      	<TextField
					id='outlined-basic'
					label='Password'
					variant='outlined'
					size='small'
					margin='dense'
					type='password'
					name='password1'
					value={password1}
					onChange={(e) => setPassword1(e.target.value)}
					required
				/>
        <TextField
					id='outlined-basic'
					label='Password'
					variant='outlined'
					size='small'
					margin='dense'
					type='password'
					name='password2'
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					required
				/>
        <Button 
          variant='text' 
          onClick={() => {setIsRegistering(false); setIsLoggingIn(true)} }
          >Submit
				</Button>
      </FormControl>  
    </form>
  )
}


export default RegisterForm;