import { useState, useEffect} from 'react'
import { film, header } from "../../../utils/mockData";
import ContactForm from '../ContactForm/ContactForm';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const HeaderForm = () => {
  const [filmData, setFilmData] = useState('')

  useEffect(() => {
    setFilmData(film.title)
  }, [])

  return (
    <section className='header-container'>
      {/* img goes here */}
      <div className='header-img center-text'>IMG GOES HERE</div>
      {/* this is the film info area */}
      <div className='header-info-container'>
        <h1>{filmData}</h1>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            minRows={4}
            maxRows={4}
          />
          <Button variant="text">save</Button>
        </FormControl>
        <ContactForm />
      </div>
    </section>
  )
}


export default HeaderForm;



// HEADER FORM
// -needs input for description and img
// -needs an edit btn
// -needs a save btn

// renders img across the entire page
// there will be a container on top of the img 
  // -displays the film title and description
    // -title is passed from parent/from network request
    // -description is rendered from the form

// the container that holds the title and description will also hold the contact component

