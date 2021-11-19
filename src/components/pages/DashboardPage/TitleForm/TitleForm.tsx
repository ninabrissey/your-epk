import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { postData } from "../../../../utils/apiCalls";
import { Link } from 'react-router-dom';
import { FilmEPK } from '../../../../types';
import './TitleForm.scss';


interface IDashboard {
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>,
  allFilms: object[]
}

const TitleForm = ({ setAllFilms, allFilms }: IDashboard) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const makeEPK = () => {

    if (title) {
      postData('https://epk-be.herokuapp.com/api/v2/film_epk', {
        "movie_title": title,
      })
        .then(data => {
          console.log(data)
          setAllFilms([data.data, ...allFilms])})
        .catch(err => setError(err))
    }
  }

  return (
    <div className='title-input'>
      <FormControl sx={{ m: 1, minWidth: 240 }} >
        <TextField
          className='title-field'
          id="outlined-basic"
          label="Film Title"
          variant="outlined"
          type='text'
          helperText='Input title to create a new EPK'
          name='name'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title &&
          <Button
            className='create-epk'
            variant="text"
            onClick={() => makeEPK()}
          >Create
          </Button>}
      </FormControl>
      {error && <h3>Sorry, this site is underconstruction and may be experiencing errors</h3>}
    </div>
  )
}


export default TitleForm;