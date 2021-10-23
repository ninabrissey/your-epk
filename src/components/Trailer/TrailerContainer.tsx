import { useState } from 'react';
import { FilmEPK } from '../../types';
import TrailerForm from './TrailerForm';
import TrailerDisplay from './TrailerDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface ITrailer {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const TrailerContainer = ({ filmEPK, addFilmInfo} : ITrailer) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
    <section className='trailer-container'>
      {isEditing && <TrailerForm filmEPK={filmEPK} addFilmInfo={addFilmInfo} />}
      {!isEditing && <TrailerDisplay filmEPK={filmEPK} />}
    </section>
  )
}

export default TrailerContainer
