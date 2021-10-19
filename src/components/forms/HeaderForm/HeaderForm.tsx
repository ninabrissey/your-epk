import { useState, useEffect} from 'react'
import { film, header } from "../../../utils/mockData";
import ContactForm from '../ContactForm/ContactForm';

const HeaderForm = () => {
  const [filmData, setFilmData] = useState('')

  useEffect(() => {
    setFilmData(film.title)
  }, [])

  return (
    <section className='header-container'>
      {/* img goes here */}
      <div>IMG GOES HERE</div>
      {/* this is the film info area */}
      <div>
        <h1>{filmData}</h1>
        <input placeholder='description goes here' />
      </div>
      <ContactForm />
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

