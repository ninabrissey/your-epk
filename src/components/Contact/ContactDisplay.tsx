import { FilmEPK } from '../../types';

interface IContactDisplay {
  filmEPK: FilmEPK;
}

const ContactDisplay = ({ filmEPK }: IContactDisplay) => {
  return (
    <section className="contact-display">
      <h2>Contact</h2>
      {filmEPK?.attributes && (
        <div className="contact-info">
          <p className="contact-name">{filmEPK.attributes.contact_name}</p>
          <p className="contact-email">
            <span>email: </span>
            {filmEPK.attributes.contact_email}
          </p>
          <p className="contact-number">
            <span>mobile: </span>
            {filmEPK.attributes.contact_number}
          </p>

          <p className="contact-website">
            <span>website: </span>
            <a
              href={
                filmEPK.attributes.website &&
                filmEPK.attributes.website.includes('https://')
                  ? filmEPK.attributes.website
                  : `https://${filmEPK.attributes.website}`
              }
              className="website-link"
              target="_blank"
            >
              {filmEPK.attributes.website}
            </a>
          </p>

          <p className="contact-company">{filmEPK.attributes.company_name}</p>
        </div>
      )}
    </section>
  );
};

export default ContactDisplay;
