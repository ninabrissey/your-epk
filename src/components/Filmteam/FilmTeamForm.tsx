import { useState } from 'react';
import { postData } from '../../utils/apiCalls';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FilmTeamForm = ({ filmEPK, epk_id, addFilmInfo, setIsEditing } : any) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSubmit = () => {
    let filmTeamMember = {
      film_fam: {
        first_name: firstName,
        last_name: lastName,
        role: role,
        description: description,
        film_epk_id: epk_id  
      }
    }
    postData('https://epk-be.herokuapp.com/api/v1/film_fams', filmTeamMember)
      .then(res => console.log('FilmTeamRES: ', res))
    setIsEditing(false)
  }

  return (
    <form className='film-team-form'>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      	<TextField
					id="outlined-basic"
					label="First name"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
        <TextField
					id="outlined-basic"
					label="Last name"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
        <TextField
					id="outlined-basic"
					label="Role"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="role"
					value={role}
					onChange={(e) => setRole(e.target.value)}
				/>
        <TextField
					id="outlined-basic"
					label="Description"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button variant="text" 
          onClick={handleSubmit}
          >add film crew
				</Button>
			</FormControl>
    </form>
  )
}


export default FilmTeamForm;


// GET	/api/v1/film_epk/:film_epk_id/film_fams	    Get all a film_epk's film fams.	
// POST	/api/v1/film_fams	                          Create film_epk film_fam.	
// PATCH	/api/v1/film_fams/:id	                    Update film_epk film_fam.	
// DELETE	/api/v1/film_fams/:id	                    Delete an film_fam.

// POST REQUEST
// body = {
//   "film_fam": {
//     "role": "Director",
//     "first_name": "alec",
//     "last_name": "baldwin",
//     "description": "goofball",
//     "film_epk_id": "80"
//   }
// }
