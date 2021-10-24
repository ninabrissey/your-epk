import { useState } from 'react';
import { FilmEPK } from '../../types';
import FilmDetailsForm from './FilmDetailsForm';
import FilmDetailsDisplay from './FilmDetailsDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmDetails {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}


const FilmDetailsContainer = ({ filmEPK, addFilmInfo } : IFilmDetails ) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
    <section className='film-details-container'>
      {isEditing && <FilmDetailsForm 
        filmEPK={filmEPK} 
        addFilmInfo={addFilmInfo} 
      />}
      {!isEditing && <FilmDetailsDisplay filmEPK={filmEPK}  />}
    </section>
  )
}

export default FilmDetailsContainer
