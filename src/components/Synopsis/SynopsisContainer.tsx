import { useState } from 'react';
import { FilmEPK } from '../../types';
import SynopsisForm from '../Synopsis/SynopsisForm';
import SynopsisDisplay from '../Synopsis/SynopsisDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface ISynopsis {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const SynopsisContainer = ({ filmEPK, addFilmInfo } : any) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
    <div className='synopsis-container'>
      <SynopsisForm filmEPK={filmEPK} addFilmInfo={addFilmInfo}/>
      {/* <SynopsisDisplay filmEPK={filmEPK} addFilmInfo={addFilmInfo}/> */}
    </div>
  )
}

export default SynopsisContainer
