import { useState, useEffect } from 'react';
import { postData, putData } from '../../utils/apiCalls';
import { getPresignedUrl,fileCheckSum, fileToData, putToAWS, postToDatabase } from '../../awsS3/helperFunctions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CryptoJS from 'crypto-js';

const FilmPosterDisplay = ({ addFilmInfo, filmEPK, setPoster, setIsEditing }: any) => {
  const [filmPoster, setFilmPoster] = useState<any>({});
  const [reminder, setReminder] = useState<boolean>(false)

  useEffect(() => {
    if (filmPoster.size > 0) {
      makeAWSpost();
    }
  }, [filmPoster])

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const input = document.querySelector<any>('#test-input').files[0]

    if (input) {
      setReminder(false)
      setFilmPoster(input) 
    } else {
      setReminder(true)

    }
  }

  const makeAWSpost = async () => {
    const presignedFileParams = await getPresignedUrl(filmPoster)
    const awsRes = await putToAWS(presignedFileParams, filmPoster)
    const data: any = await postToDatabase(presignedFileParams, filmEPK, 'movie_posters')
    // We need to pass this value to state 
    setPoster(data.movie_poster_url);
  }

  return (
    <div>
    <form>
      <p>I am the film poster form</p>
      <input id='test-input' type="file" accept="image/*" />
      {reminder && <p>Must choose a file to save</p>}
      <button onClick={(event) => { handleSubmit(event) }}>Save</button>
      {/* <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          // hidden
        />
      </Button> */}
    </form>
    <button onClick={() => setIsEditing(false)} >Done editing</button>
    </div>
  )
}


export default FilmPosterDisplay;
