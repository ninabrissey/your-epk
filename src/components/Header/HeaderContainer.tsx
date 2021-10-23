import { useState, useEffect } from 'react';
import { FilmEPK } from '../../types';
import HeaderForm from './HeaderForm';
import HeaderDisplay from './HeaderDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IHeader {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const HeaderContainer = ({ filmEPK, addFilmInfo } : IHeader) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  console.log('filmEPK in Header Container: ', filmEPK)

  return (
    <div className='header-container'>
      {isEditing && <HeaderForm filmEPK={filmEPK} addFilmInfo={addFilmInfo} />}
      {!isEditing && <HeaderDisplay filmEPK={filmEPK} />}
    </div>
  )
}

export default HeaderContainer;
