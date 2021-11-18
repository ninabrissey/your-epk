import { FilmEPK, Included, CurrentCrewMember } from '../../types';

interface IFilmTeamDisplay {
	filmEPK: FilmEPK;
  allCrew: Included;
  // currentMember: CurrentCrewMember;
}
const FilmTeamDisplay = ({ filmEPK, allCrew } : IFilmTeamDisplay) => {

  return (
    <section>
      {console.log('allCrew in DISPLAY: ', allCrew)}
      <p>I am the FILM TEAM DISPLAY</p>
      {/* <p>{filmEPK.relationships.film_fam[0].first_name}</p> */}
      <p></p>
      <p></p>
    </section>
  )
}


export default FilmTeamDisplay;