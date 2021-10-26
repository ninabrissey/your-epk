import { FilmEPK } from '../../types';

interface IFilmDetails {
  filmEPK: FilmEPK;
}

// Maria, I may have added c;asses here - take a look at the two classNames and scss
const FilmDetailsDisplay = ({ filmEPK }: IFilmDetails) => {
  return (
    <section className="film-details-section">
      <h2>Film Details</h2>
      {filmEPK.attributes !== undefined && (
        <div className="film-details-text">
          <p>Genre: {filmEPK.attributes.genre}</p>
          <p>Country of origin: {filmEPK.attributes.country}</p>
          <p>Realeased: {filmEPK.attributes.release_year}</p>
          <p>Runtime: {filmEPK.attributes.run_time}</p>
          <p>Langauge: {filmEPK.attributes.language}</p>
          <p>Budget: {filmEPK.attributes.budget}</p>
          <p>Production Company: {filmEPK.attributes.production_company}</p>
          <p>Website: {filmEPK.attributes.website}</p>
        </div>
      )}
    </section>
  );
};

export default FilmDetailsDisplay;
