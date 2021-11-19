import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { postData } from '../../../utils/apiCalls';

const RegisterForm = ({ setIsRegistering, setIsLoggingIn } : any) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
	const [error, setError] = useState<boolean>(false)
	const [success, setSuccess] = useState<boolean>(false)

	const registerUser = () => {
		console.log(firstName, lastName, email, password1, password2)
		const canPost = checkUser()

		if (!canPost) {
			setError(true)
		}

		if (canPost) {
			console.log('user will post')
			postData('https://epk-be.herokuapp.com/api/v1/users', {
				"email": email,
				"first_name": firstName,
				"last_name": lastName,
				"password": password1,
				"password_confirmation": password2
			}).then(res => {
				console.log(res)
				// setIsRegistering(false) 
				// setIsLoggingIn(true)
				setSuccess(true)
			})
		}
	}

	const checkUser = () => {
		let canPost = true;

		if (password1 !== password2) {
			canPost = false
		}

		if (firstName.length < 1 || lastName.length < 1 || email.length < 6 || password1.length < 8) {
			canPost = false
		}

		return canPost
	}

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
          onClick={() => {
						registerUser();
					} }
          >Submit
				</Button>
      </FormControl>  
			{error && <p>Please fill out all fields and make sure password is at least 8 characters</p>} 
			{success && 
				<Link to={`/login`} className='login-btn'>
					<Button variant="text" onClick={() => {

						} }>
						Success! Return to Login
					</Button>
			</Link>}
    </form>
  )
}


export default RegisterForm;