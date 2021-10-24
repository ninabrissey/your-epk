import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const FilmDetailsForm = ({ addFilmInfo } : any) => {
  const [genre, setGenre] = useState<string>('')


  const handleSubmit = () => {
    const currentFilmDetails = {
      genre: genre
    }
    addFilmInfo(currentFilmDetails)
  }

  return (
    <form>
      <p>I am the film details form</p>
      <FormControl sx={{ m: 1, minWidth: 480 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Img URL"
          type='text'
          name='genre'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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


export default FilmDetailsForm;