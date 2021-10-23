import { useState } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const TrailerForm = () => {
  const [filmTrailer, setFilmTrailer] = useState<string>('')


  const handleSubmit = () => {
    let currentTrailer = {
      trailer: filmTrailer
    }
    // send currentTrailer to editPage here
    clearForm()
  }

  const clearForm = () => {
    setFilmTrailer('')
  }

  return (
    <form>
            <p>I am the trailer form container</p>
        <FormControl sx={{ m: 1, minWidth: 480 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Img URL"
            type='text'
            name='trailer'
            value={filmTrailer}
            onChange={(e) => setFilmTrailer(e.target.value)}
          />
          <Button 
            variant="text"
            onClick={handleSubmit}
            >save
          </Button>
        </FormControl>
    </form> 
  )
}


export default TrailerForm;