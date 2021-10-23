import { useState, useEffect} from 'react';
import { FilmEPK } from '../../types';
import { contact } from "../../utils/mockData";

interface IContactDisplay {
  filmEPK: FilmEPK
}

const ContactDisplay = ({ filmEPK } : IContactDisplay) => {

  return (
    <section className='contact-display-container'>
      <h2>Contact</h2>
      <div>
        <p>Name</p>
        <p>Phone Number</p>
        <p>Email Address</p>
        <p>Company</p>
      </div>
    </section>
  )
}


export default ContactDisplay;