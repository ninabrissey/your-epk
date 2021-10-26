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

const FilmDetailsContainer = ({ filmEPK, addFilmInfo }: IFilmDetails) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  // Nina Note
  // I believe that error handling and loading is all being handled
  // Edit page for everything except for the arrays

  return (
    <section className="film-details-container">
      {!isEditing && (
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={() => setIsEditing(true)}
        >
          <EditIcon />
        </Fab>
      )}

      {isEditing && (
        <FilmDetailsForm
          filmEPK={filmEPK}
          addFilmInfo={addFilmInfo}
          setIsEditing={setIsEditing}
        />
      )}

      {!isEditing && <FilmDetailsDisplay filmEPK={filmEPK} />}
    </section>
  );
};

export default FilmDetailsContainer;
