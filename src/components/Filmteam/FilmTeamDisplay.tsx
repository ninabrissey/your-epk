import { Included } from '../../types';
import FilmMemberCard from './FilmMemberCard';

interface IFilmTeamDisplay {
  allCrew: Included[];
}
const FilmTeamDisplay = ({ allCrew } : IFilmTeamDisplay) => {

  const searchAllCrew = allCrew.map((crewMember : Included) => {
    return ( 
      <FilmMemberCard 
        key={crewMember.id}
        name={crewMember.attributes.first_name}
        role={crewMember.attributes.role}
        description={crewMember.attributes.description}
        image={crewMember.attributes.head_shot_url}
      />
    )
  })

  return (
    <section className='all-crew-wrapper'>
      {searchAllCrew}
    </section>
  )
}


export default FilmTeamDisplay;