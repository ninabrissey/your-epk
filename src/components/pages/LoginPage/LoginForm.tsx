import { useState, useEffect } from 'react';
import { postUserData } from '../../../utils/apiCalls';
import { Link } from 'react-router-dom';
import { UserData } from '../../../types';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import logoImage from '../../../images/logo_image.png';
import logoBackground from '../../../images/logo_background2.png';

const LoginForm = ({ setCurrUser, setIsRegistering, setIsLoggingIn } : any) => {
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
			const cookie: any = Cookies.set('csrf-token', res.data.attributes.csrf_token)
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
			<h1>Welcome to <span>Your EPK</span> A platform to build your own electronic press kit</h1>
			{/* <h1>Login to make it happen</h1> */}
			{/* <img className='login-img' src={logoImage} alt='' /> */}
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