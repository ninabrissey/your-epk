import { useState, useEffect } from 'react';
import { postData } from '../../utils/apiCalls';
import { getPresignedUrl, putToAWS, postFilmMemberToDatabase } from '../../awsS3/helperFunctions';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FilmTeamForm = ({ filmEPK, epk_id, addFilmInfo, setIsEditing, allCrew, setAllCrew } : any) => {
  const [name, setName] = useState<string>('')
  // const [lastName, setLastName] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<any>({})
  const [currentMember, setCurrentMember] = useState<object>({})

  // useEffect(() => {
  //   if (image.size > 0) {
  //     makeAWSpost();
  //   }
  // }, [image])

  // useEffect(() => {
  //   const input = document.querySelector<any>('#FilmCrewImageInput').files[0];
  //   const fileName = document.querySelector<any>('#file-chosen')

  //   fileName.innerText = document.querySelector<any>('#FilmCrewImageInput').files[0];
  //   console.log(fileName)
  // }, [])

  const postFilmFam = (filmTeamMember : object) => {
    postData('https://epk-be.herokuapp.com/api/v1/film_fams', filmTeamMember)
    .then((data : any) => {
      console.log('data in form POST: ', data)
      handleImageSubmit(data.data.id).then(data => setAllCrew([data.data, ...allCrew]))
    })
  }

  const handleTextSubmit = (event : any) => {
    event.preventDefault();

    let filmTeamMember = {
      film_fam: {
        first_name: name,
        role: role,
        description: description,
        film_epk_id: epk_id  
      }
    }
    postFilmFam(filmTeamMember)
  }

  const handleImageSubmit = async (memberID : any) => {
		// event.preventDefault();
		const input = document.querySelector<any>('#FilmCrewImageInput').files[0];

    if (input.size > 0) {
      const presignedFileParams = await getPresignedUrl(input);
      console.log('presignedFileParams: ', presignedFileParams)
      const awsRes = await putToAWS(presignedFileParams, input);
      const data: any = await postFilmMemberToDatabase(presignedFileParams, memberID, 'head_shots')
      return data
    }
	}

  return (
    <section className="film-team-form">

      <form className="film-team-img-form">
        <div>
          {/* <label 
            htmlFor="FilmCrewImageInput" className='image-upload-btn'
            >Upload Image
          </label>
          <span id="file-chosen">No file chosen</span> */}
          <input
            // hidden
            className="image-upload-btn-2"
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

