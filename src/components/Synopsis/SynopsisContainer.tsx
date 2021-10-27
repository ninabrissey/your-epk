import { useState } from 'react';
import { FilmEPK } from '../../types';
import SynopsisForm from '../Synopsis/SynopsisForm';
import SynopsisDisplay from '../Synopsis/SynopsisDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface ISynopsis {
  filmEPK: FilmEPK;
  addFilmInfo: any;
  epk_id: any;
}

const SynopsisContainer = ({ filmEPK, addFilmInfo, epk_id }: ISynopsis) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  return (
    <div className="synopsis-container">
      <h2>Synopsis</h2>
      {!isEditing && (
        <Fab
          // color="secondary"
          size="small"
          aria-label="edit"
          onClick={() => setIsEditing(true)}
          className="synopsis-edit-btn"
        >
          <EditIcon />
        </Fab>
      )}
      {isEditing && (
        <SynopsisForm
          filmEPK={filmEPK}
          addFilmInfo={addFilmInfo}
          setIsEditing={setIsEditing}
        />
      )}
      {!isEditing && <SynopsisDisplay filmEPK={filmEPK} epk_id={epk_id} />}
    </div>
  );
};

export default SynopsisContainer;
