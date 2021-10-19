import { useState, useEffect} from 'react'
import { film, header } from "../../../utils/mockData";
import ContactForm from '../ContactForm/ContactForm';

const HeaderForm = () => {

  return (
    <section className='header-form-container'>
      <p>film title goes here</p>
      <p>I am the header form</p>
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

