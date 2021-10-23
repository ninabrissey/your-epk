import { useState } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const FilmPosterDisplay = ({ addFilmInfo } : any) => {
  const [filmPoster, setFilmPoster] = useState<string>('')

  const handleSubmit = () => {
    const currentFilmPoster = {
      movie_poster_url: filmPoster
    }
    addFilmInfo(currentFilmPoster)
    setFilmPoster('')
  }

  return (
    <form>
      <p>I am the film poster form</p>
      <FormControl sx={{ m: 1, minWidth: 340 }}>
        <TextField
          id='outlined-multiline-flexible'
          label='Img URL'
          type='file'
          name='filmPoster'
          value={filmPoster}
          onChange={(e) => setFilmPoster(e.target.value)}
        />
        <Button 
          variant='text'
          onClick={handleSubmit}
          >save
        </Button>
      </FormControl>
  </form>
  )
}


export default FilmPosterDisplay;