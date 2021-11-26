import { useState } from 'react';
import { postUserData } from '../../../utils/apiCalls';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import logoBackground from '../../../images/logo_image.png';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
	const [hasCookie, setHasCookie] = useState<boolean>(false)
	const [error, setError] = useState('')

  const handleClick = () => {
    let currentUser = {
      email: email,
      password: password
    }
    
    postUserData('https://epk-be.herokuapp.com/api/v1/sessions', currentUser)
    .then(res => {
			Cookies.set('csrf-token', res.data.attributes.csrf_token)
			setHasCookie(true)
			setError('')
		})
		.catch(err => {	
			setError(`${err}`)
		})
  }


  return (
    <form className='login-container'>
			<img src={logoBackground} alt='' />
			<div className='login-text-wrapper'>
				<h1>Welcome to <span>Your EPK</span> </h1>
				<h2>A platform to build your own electronic press kit</h2>
			</div>
			<div className='login-form-wrapper'>
			{!hasCookie &&	
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
					
						<Button className='login-btn' variant="text" onClick={() => {handleClick()}}>
							Login
						</Button>
						<Link to={`/register`} className='login-btn'>
							<Button variant="text" onClick={() => {
							} }>
								Register
							</Button>
						</Link>
				</FormControl> } 
				{hasCookie && 
					<Link to={`/dashboard`} className='login-btn'>
						<Button variant="text" >
							Success! Go to Dashboard
					</Button>
					</Link> }
				{error && <p>Login failed. Please try again</p>}
			</div>	
    </form>
  )
}


export default LoginForm;