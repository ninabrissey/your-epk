import { useState } from 'react';
import { postData } from '../../utils/apiCalls';
import { FilmEPK } from '../../types';
import FilmTeamForm from './FilmTeamForm';
import FilmTeamDisplay from './FilmTeamDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmTeam {
	filmEPK: FilmEPK;
  epk_id: string;
	addFilmInfo: any;
}

const FilmTeamContainer = ({ filmEPK, epk_id, addFilmInfo } : IFilmTeam) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [currentMember, setCurrentMember] = useState<object>({})

  const postFilmFam = (filmTeamMember : object) => {
    postData('https://epk-be.herokuapp.com/api/v1/film_fams', filmTeamMember)
    .then((data : any) => {
      setCurrentMember(data.attributes)
      console.log('data: ', data)
    })
  }

  return (
    <div className='film-team-container'>
      <h2>Film Crew</h2>
      {isEditing && <FilmTeamForm 
        filmEPK={filmEPK}
        epk_id={epk_id}
        addFilmInfo={addFilmInfo}
        postFilmFam={postFilmFam}
        setIsEditing={setIsEditing} 
      />}
      {!isEditing && <FilmTeamDisplay filmEPK={filmEPK} />}
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
    </div>
  )
}

export default FilmTeamContainer;
