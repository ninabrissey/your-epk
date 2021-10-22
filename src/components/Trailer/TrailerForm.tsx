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
    clearForm()
  }

  const clearForm = () => {
    setFilmTrailer('')
  }

  return (
    <section className='trailer-container'>
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
    </section> 
  )
}


export default TrailerForm;