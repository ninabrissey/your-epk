import { useEffect, useState } from 'react';
import { getEPK } from '../../utils/apiCalls';
import { FilmEPK, Included, FilmFams, CurrentCrewMember } from '../../types';
import FilmMemberCard from './FilmMemberCard';

interface IFilmTeamDisplay {
	filmEPK: FilmEPK;
  allCrew: Included[];
  epk_id: any;
  // currentMember: CurrentCrewMember;
}
const FilmTeamDisplay = ({ filmEPK, allCrew, epk_id } : IFilmTeamDisplay) => {
  const [image, setImage] = useState<string>('')
  console.log('allCrew: ', allCrew)

  useEffect(() => {
		getEPK(epk_id)
			.then(data => setImage(data.data.attributes.head_shots))
	},[])

  const searchAllCrew = allCrew.map((crewMember : Included) => {
    return ( 
      <FilmMemberCard 
        key={crewMember.id}
        name={crewMember.attributes.first_name}
        role={crewMember.attributes.role}
        description={crewMember.attributes.description}
        image={image}
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