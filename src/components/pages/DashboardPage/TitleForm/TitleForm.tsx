import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { postData } from "../../../../utils/apiCalls";
import { Link } from 'react-router-dom';
import { FilmEPK } from '../../../../types';
import './TitleForm.scss';


interface IDashboard {
  id: number,
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>,
  allFilms: object[]
}

const TitleForm = ({ id, setAllFilms, allFilms }: IDashboard) => {
  const [title, setTitle] = useState('')
  // const endpointTitle: string = title.split(' ').join('-')
  // const [filmId, setFilmId] = useState<number>()

  const makeEPK = () => {
    // if (title) {
    //   postData('https://epk-be.herokuapp.com/api/v1/film_epk', {
    //     "user_id": id,
    //     "movie_title": title,
    //   }).then(data => {
    //     setAllFilms([...allFilms, data.data.attributes.movie_title])
    //     console.log(allFilms)
    //   })
    // }
    // comment out because this was erroring on my branch

    if (title) {
      postData('https://epk-be.herokuapp.com/api/v1/film_epk', {
        "user_id": id,
        "movie_title": title,
      })
        .then(data => setAllFilms([data.data, ...allFilms]))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='title-input'>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
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
    </div>
  )
}


export default TitleForm;