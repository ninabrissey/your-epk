import { useState } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const FilmPosterDisplay = () => {
  const [filmPoster, setFilmPoster] = useState<string>('')

  return (
    <form>
      <p>I am the film poster form</p>
      <FormControl sx={{ m: 1, minWidth: 340 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Img URL"
            type='text'
            name='filmPoster'
            value={filmPoster}
            onChange={(e) => setFilmPoster(e.target.value)}
          />
          <Button 
            variant="text"
            // onClick={}
            >save
          </Button>
        </FormControl>
    </form>
  )
}


export default FilmPosterDisplay;