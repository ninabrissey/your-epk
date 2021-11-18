import { FilmEPK } from '../../types';

interface IFilmTeamDisplay {
	filmEPK: FilmEPK;
}
const FilmTeamDisplay = ({ filmEPK } : IFilmTeamDisplay) => {

  return (
    <section>
      {/* {console.log(filmEPK)} */}
      <p>I am the FILM TEAM DISPLAY</p>
      {/* <p>{filmEPK.relationships.film_fam[0].first_name}</p> */}
      <p></p>
      <p></p>
    </section>
  )
}


export default FilmTeamDisplay;