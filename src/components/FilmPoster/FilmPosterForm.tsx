import { useState, useEffect } from 'react';
import { postData, putData } from '../../utils/apiCalls';
import { getPresignedUrl,fileCheckSum, fileToData, putToAWS, postToDatabase } from '../../awsS3/helperFunctions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CryptoJS from 'crypto-js';

const FilmPosterDisplay = ({ addFilmInfo, filmEPK, setPoster }: any) => {
  const [filmPoster, setFilmPoster] = useState<any>({})

  useEffect(() => {
    if (filmPoster.size > 0) {
      makeAWSpost();
    }
  }, [filmPoster])

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFilmPoster(document.querySelector<any>('#test-input').files[0])
  }

  const makeAWSpost = async () => {
    const presignedFileParams = await getPresignedUrl(filmPoster)
    const awsRes = await putToAWS(presignedFileParams, filmPoster)
    const data: any = await postToDatabase(presignedFileParams, filmEPK, 'movie_posters')
    // We need to pass this value to state 
    setPoster(data.movie_poster_url);
  }

  return (
    <form>
      <p>I am the film poster form</p>
      <input id='test-input' type="file" accept="image/*" />
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
  )
}


export default FilmPosterDisplay;
