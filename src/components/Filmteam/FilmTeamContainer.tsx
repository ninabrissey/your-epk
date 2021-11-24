import { useState, useEffect } from 'react';
import { postData } from '../../utils/apiCalls';
import { FilmEPK, Included } from '../../types';
import { filterIncluded } from '../../utils/cleanData';
import FilmTeamForm from './FilmTeamForm';
import FilmTeamDisplay from './FilmTeamDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmTeam {
	filmEPK: FilmEPK;
  epk_id: string;
	addFilmInfo: any;
  included: Included[];
}

const FilmTeamContainer = ({ filmEPK, epk_id, addFilmInfo, included } : IFilmTeam) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [allCrew, setAllCrew] = useState<Included[]>([])

  useEffect(() => {
    setAllCrew((filterIncluded(included, 'film_fam')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='film-team-container'>
      <h2>Film Crew</h2>

      {!isEditing && 
        <Fab
          size="small"
          aria-label="edit"
          onClick={() => setIsEditing(true)}
          className='awards-press-edit-btn'
        >
          <EditIcon />
        </Fab>
      }

      <FilmTeamDisplay 
        // filmEPK={filmEPK} 
        allCrew={allCrew} 
        // epk_id={epk_id}
      />

      {isEditing && 
        <FilmTeamForm 
          filmEPK={filmEPK}
          epk_id={epk_id}
          addFilmInfo={addFilmInfo}
          // postFilmFam={postFilmFam}
          setIsEditing={setIsEditing} 
          allCrew={allCrew}
          setAllCrew={setAllCrew}
        />
      }

    </div>
  )
}

export default FilmTeamContainer;
