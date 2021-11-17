import { useState } from 'react';
import { FilmEPK } from '../../types';
import FilmTeamForm from './FilmTeamForm';
import FilmTeamDisplay from './FilmTeamDisplay';

interface IFilmTeam {
	filmEPK: FilmEPK;
  epk_id: string;
	addFilmInfo: any;
}

const FilmTeamContainer = ({ filmEPK, epk_id, addFilmInfo } : IFilmTeam) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  return (
    <div className='film-team-container'>
      <h2>Film Crew</h2>
      <FilmTeamForm 
        filmEPK={filmEPK}
        epk_id={epk_id}
        addFilmInfo={addFilmInfo}
        setIsEditing={setIsEditing} 
      />
      {/* <FilmTeamDisplay /> */}
    </div>
  )
}

export default FilmTeamContainer;
