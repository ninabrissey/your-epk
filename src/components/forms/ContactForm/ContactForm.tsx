import { useState, useEffect} from 'react'
import { film, header } from "../../../utils/mockData";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const ContactForm = () => {

  return (
    <section className='contact-form-container'>
      <h2>Contact</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Company" variant="outlined" />
        <Button variant="text">save</Button>
      </FormControl>
    </section>
  )
}


export default ContactForm;


// CONTACT FORM
// -needs input for name, phone number, email, company
// -needs edit btn
// -needs save btn

// renders inside the header component
