import ContactForm from './ContactForm';
import ContactDisplay from './ContactDisplay';

// do I need the container for contact or does the display live in the header display 

const ContactContainer = () => {
  return (
    <div className='contact-container'>
      {/* <ContactForm /> */}
      <ContactDisplay />
    </div>
  )
}

export default ContactContainer
