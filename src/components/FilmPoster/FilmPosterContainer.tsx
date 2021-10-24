import { useState } from 'react';
import { FilmEPK } from '../../types';
import FilmPosterForm from '../FilmPoster/FilmPosterForm';
import FilmPosterDisplay from '../FilmPoster/FilmPosterDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmPoster {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const FilmPosterContainer = ({ filmEPK, addFilmInfo} : IFilmPoster) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (  
    <div className='film-poster-container'>
      {!isEditing && 
        <Fab color='secondary' aria-label='edit'>
          <EditIcon />
        </Fab>
      }
      {isEditing && <FilmPosterForm filmEPK={filmEPK} addFilmInfo={addFilmInfo} />}
      {!isEditing && <FilmPosterDisplay filmEPK={filmEPK} />}
    </div>
  )
}

export default FilmPosterContainer;
