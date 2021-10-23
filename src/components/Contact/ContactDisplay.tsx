import { useState, useEffect } from 'react';
import { FilmEPK, Attributes } from '../../types';

interface IContactDisplay {
  filmEPK: FilmEPK;
}

const ContactDisplay = ({ filmEPK } : IContactDisplay) => {
  const [currentEPK, setCurrentEPK] = useState<Attributes>({} as Attributes)
  const [company, setCompany] = useState<Attributes>({} as Attributes)

  useEffect(() => {
    setCurrentEPK(filmEPK.attributes)
    setCompany(filmEPK.attributes)
  }, [filmEPK])

  console.log('currentEPK: ', currentEPK)
  console.log('company: ', company)

  return (
    <section className='contact-display-container'>
      <h2>Contact</h2>
      <div>
        <p>Name</p>
        <p>Phone Number</p>
        <p>Email Address</p>
        <p></p>
      </div>
    </section>
  )
}



export default ContactDisplay;