import { Included } from '../../types';
import FilmMemberCard from './FilmMemberCard';

interface IFilmTeamDisplay {
  allCrew: Included[];
  removeFilmMember: any;
  isEditing: boolean;
}
const FilmTeamDisplay = ({
  allCrew,
  removeFilmMember,
  isEditing,
}: IFilmTeamDisplay) => {
  const searchAllCrew = allCrew.map((crewMember: Included) => {
    return (
      <FilmMemberCard
        key={crewMember.id}
        id={crewMember.id}
        name={crewMember.attributes.first_name}
        role={crewMember.attributes.role}
        description={crewMember.attributes.description}
        image={crewMember.attributes.head_shot_url}
        removeFilmMember={removeFilmMember}
        isEditing={isEditing}
      />
    );
  });

  return <section className="all-crew-wrapper">{searchAllCrew}</section>;
};

export default FilmTeamDisplay;
