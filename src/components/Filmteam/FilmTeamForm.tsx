import { useState, useEffect } from 'react';
import { postData } from '../../utils/apiCalls';
import { getPresignedUrl, putToAWS, postToDatabase } from '../../awsS3/helperFunctions';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FilmTeamForm = ({ filmEPK, epk_id, addFilmInfo, postFilmFam, setIsEditing } : any) => {
  const [name, setName] = useState<string>('')
  // const [lastName, setLastName] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<any>({})

  useEffect(() => {
    if (image.size > 0) {
      makeAWSpost();
    }
  }, [image])


  const handleTextSubmit = async (event : any) => {
    event.preventDefault();

    let filmTeamMember = {
      film_fam: {
        first_name: name,
        // last_name: lastName,
        role: role,
        description: description,
        film_epk_id: epk_id  
      }
    }
    await postFilmFam(filmTeamMember)


    handleImageSubmit(event)
  }

  const handleImageSubmit = async (event: any) => {
		event.preventDefault();
		const input = document.querySelector<any>('#FilmCrewImageInput').files[0];

		if (input) {
			setImage(input);
		}
	}

  const makeAWSpost = async () => {
		const presignedFileParams = await getPresignedUrl(image);
		const awsRes = await putToAWS(presignedFileParams, image);
		const data: any = await postToDatabase(presignedFileParams, filmEPK, 'head_shots')
	}

  return (
    <section className="film-team-form">

      <form className="film-team-img-form">
        <div>
          <input
            id="FilmCrewImageInput"
            type="file"
            accept="image/*"
          />
          {/* <button
            onClick={(event) => {
              handleImageSubmit(event);
            }}
            >Save
          </button> */}
        </div>
      </form>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
      	<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
        {/* <TextField
					id="outlined-basic"
					label="Last name"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/> */}
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
          onClick={handleTextSubmit}
          >add film crew
				</Button>
			</FormControl>

      <FormControl>
        <Button variant="text" 
          onClick={() => setIsEditing(false)}
          >done editing
				</Button>
			</FormControl>

    </section>
  )
}


export default FilmTeamForm;

