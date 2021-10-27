import { FilmEPK } from '../../types';

interface IFilmDetails {
  filmEPK: FilmEPK;
}


const FilmDetailsDisplay = ({ filmEPK }: IFilmDetails) => {
  return (
    <section className="film-details-section">
      {filmEPK.attributes !== undefined && (
        <div className="film-details-info">
          <p><span>Genre: </span>{filmEPK.attributes.genre}</p>
          <p><span>Country of origin: </span>{filmEPK.attributes.country}</p>
          <p><span>Realeased: </span>{filmEPK.attributes.release_year}</p>
          <p><span>Runtime: </span>{filmEPK.attributes.run_time}</p>
          <p><span>Langauge: </span>{filmEPK.attributes.language}</p>
          <p><span>Budget: </span>{filmEPK.attributes.budget}</p>
          <p><span>Production Company: </span>{filmEPK.attributes.production_company}</p>
          <p><span>Website: </span><a href={filmEPK.attributes.website} className="website-link">{filmEPK.attributes.website}</a></p>
        </div>
      )}
    </section>
  );
};

export default FilmDetailsDisplay;
