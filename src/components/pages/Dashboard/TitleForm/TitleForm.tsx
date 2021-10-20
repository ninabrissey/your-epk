import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { postData } from "../../../../utils/apiCalls";
import { Link } from 'react-router-dom'



const TitleForm = (dbprops: { id: number, name: string }) => {
  const [title, setTitle] = useState('')
  const [allTitles, setAllTitles] = useState<String[]>([]) //this is for the 

  const formattedTitle: string = title.split(' ').join('-')

  useEffect(() => {
    //a fetch goes here and runs setAllTitles
  }, [])

  const makeEPK = () => {
    if (title) {
      postData('https://epk-be.herokuapp.com/api/v1/film_epk', {
        "user_id": dbprops.id,
        "movie_title": title,
      }).then(data => console.log(data))
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
      {/* <Link to={`/${formattedTitle}-edit`}> */}
      <Button
        variant="text"
        onClick={() => makeEPK()}
      >save
      </Button>
      {/* </Link> */}
    </FormControl>
  )
}


export default TitleForm;