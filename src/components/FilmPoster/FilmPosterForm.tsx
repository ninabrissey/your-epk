import { useState } from 'react';
import { getPresignedUrl, putToAWS, postToDatabase } from '../../awsS3/helperFunctions';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


const FilmPosterDisplay = ({ filmEPK, setIsEditing, isEditing }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [reminder, setReminder] = useState<boolean>(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const input = document.querySelector<any>('#test-input').files[0]

    if (!input) {
			setReminder(true)
		} else {
			setIsLoading(true)
      setReminder(false)
			makeAWSpost(input).then(res => {
				setIsLoading(false)
				setIsEditing(!isEditing)
			})
		}
  }

  const makeAWSpost = async (file: any) => {
    const presignedFileParams = await getPresignedUrl(file)
    await putToAWS(presignedFileParams, file)
    await postToDatabase(presignedFileParams, filmEPK, 'movie_posters')
  }

  return (
    <div className='poster-form-wrapper'>
      <h2>Film Poster</h2>
      <form className='film-poster-form'>
        <input 
          className='image-upload-btn'
          id='test-input' 
          type="file" 
          accept="image/*" 
        />
        {isLoading && <p>Saving image...</p>}
        {reminder && <p>Must choose a file to save</p>}

        <FormControl>
          <Button 
            className='film-team-done-btn'
            variant="text" 
            onClick={(event) => handleSubmit(event)}
            >save
          </Button>
        </FormControl>

        <FormControl>
          <Button 
            className='done-editing-btn'
            variant="text" 
            onClick={() => setIsEditing(!isEditing)}
            >done editing
          </Button>
        </FormControl>
      </form>
    </div>
  )
}


export default FilmPosterDisplay;
