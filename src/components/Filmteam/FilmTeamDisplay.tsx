import { FilmEPK, Included, FilmFams, CurrentCrewMember } from '../../types';
import FilmMemberCard from './FilmMemberCard';

interface IFilmTeamDisplay {
	filmEPK: FilmEPK;
  allCrew: any;
  // currentMember: CurrentCrewMember;
}
const FilmTeamDisplay = ({ filmEPK, allCrew } : IFilmTeamDisplay) => {

  const searchAllCrew = allCrew.map((crewMember : Included) => {
    let counter = 0
    return( 
      <FilmMemberCard 
        key={counter++}
        name={crewMember.attributes.first_name}
        role={crewMember.attributes.role}
        description={crewMember.attributes.description}
      />
      )
  })

  return (
    <section>
      {console.log('allCrew in DISPLAY: ', allCrew)}
      {/* <p>I am the FILM TEAM DISPLAY</p> */}
      {searchAllCrew}
    </section>
  )
}


export default FilmTeamDisplay;