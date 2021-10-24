import { FilmEPK } from '../../types';

interface IFilmDetails {
  filmEPK: FilmEPK;
}

const FilmDetailsDisplay = ({ filmEPK } : IFilmDetails) => {

  return (
    <section>
      <h2>Film Details</h2>
      {filmEPK.attributes !== undefined && <div>
        <p>{filmEPK.attributes.genre}</p>
        <p>{filmEPK.attributes.country}</p>
        <p>{filmEPK.attributes.release_year}</p>
        <p>{filmEPK.attributes.run_time}</p>
        <p>{filmEPK.attributes.language}</p>
        <p>{filmEPK.attributes.budget}</p>
        <p>{filmEPK.attributes.production_company}</p>
        <p>{filmEPK.attributes.website}</p>
      </div>}
      {console.log('filmEPK in FILM DETAILS DISPLAY', filmEPK)}
    </section>
  )
}


export default FilmDetailsDisplay;