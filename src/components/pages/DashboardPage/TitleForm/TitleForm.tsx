import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { postData } from "../../../../utils/apiCalls";
import { Link } from 'react-router-dom'


interface IDashboard {
  id: number,
  setAllFilms: React.Dispatch<React.SetStateAction<object[]>>,
  allFilms: object[]
}

const TitleForm = ({ id, setAllFilms, allFilms }: IDashboard) => {
  const [title, setTitle] = useState('')
  const endpointTitle: string = title.split(' ').join('-')

  const makeEPK = () => {
    if (title) {
      postData('https://epk-be.herokuapp.com/api/v1/film_epk', {
        "user_id": id,
        "movie_title": title,
      }).then(data => {
        setAllFilms([...allFilms, data.data.attributes.movie_title])
        console.log(allFilms)
      })
    }
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <TextField
        id="outlined-basic"
        label="Film Title"
        variant="outlined"
        type='text'
        name='name'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Link to={`/edit/${endpointTitle}`}>
        <Button
          variant="text"
          onClick={() => makeEPK()}
        >save
        </Button>
      </Link>
    </FormControl>
  )
}


export default TitleForm;