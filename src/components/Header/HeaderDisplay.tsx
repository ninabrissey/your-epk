import { FilmEPK, Attributes } from '../../types';
import ContactDisplay from '../Contact/ContactDisplay';

interface IHeaderDisplay {
  filmEPK: FilmEPK;
}

const HeaderDisplay = ({ filmEPK } : IHeaderDisplay) => {

  return (
    <section>
      <img 
        className='header-img' 
        src='https://images.squarespace-cdn.com/content/v1/594ea6feccf210e3df36ce8d/1530550829458-1E1T99Y53C81CU09S9P3/Nina+Brissey+and+Robert+Craighead+Amazing+Grace+Film?format=1500w'
        alt=''
      />
      <div className='header-info-container'>
        <div>
          {filmEPK.attributes !== undefined && <h1>{filmEPK.attributes.movie_title}</h1>}
          <p>Grace, who is Ed's only hope, has been enabling her father's drinking for far too long. Ed, a Vietnam Veteran, is starting to unravel. Both must learn how to cope in this imperfect world.</p>
        </div>
        <ContactDisplay filmEPK={filmEPK} />
      </div>
    </section>
  )
}


export default HeaderDisplay;