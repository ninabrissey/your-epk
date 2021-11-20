import { FilmEPK, Included, FilmFams, CurrentCrewMember } from '../../types';
import FilmMemberCard from './FilmMemberCard';

interface IFilmTeamDisplay {
	filmEPK: FilmEPK;
  allCrew: Included[];
  // currentMember: CurrentCrewMember;
}
const FilmTeamDisplay = ({ filmEPK, allCrew } : IFilmTeamDisplay) => {

  const searchAllCrew = allCrew.map((crewMember : Included) => {
    let counter = 0
    return ( 
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
      {/* {console.log('allCrew in DISPLAY: ', allCrew)} */}
      {searchAllCrew}
    </section>
  )
}


export default FilmTeamDisplay;