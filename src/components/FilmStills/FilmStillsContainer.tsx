import { useState, useEffect } from 'react';
import { postData, getArrayData } from '../../utils/apiCalls';
// import { Included, Image } from '../../types';
import { Image } from '../../types';
import FilmStillsDisplay from './FilmStillsDisplay';
import FilmStillsForm from './FilmStillsForm';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const FilmStillsContainer = (epk_id: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [filmStills, setFilmStills] = useState<Image[] | []>([]);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArrayData('film_stills', epk_id);
  }, []);

  return (
    <section>
      <h2>Film Stills</h2>

      {!isEditing && (
        <Fab
          size="small"
          aria-label="edit"
          onClick={() => setIsEditing(true)}
          className="awards-press-edit-btn"
        >
          <EditIcon />
        </Fab>
      )}
      <FilmStillsDisplay filmStills={filmStills} epk_id={epk_id} />
      {isEditing && (
        <FilmStillsForm
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          filmStills={filmStills}
          setFilmStills={setFilmStills}
          epk_id={epk_id}
        />
      )}
    </section>
  );
};

export default FilmStillsContainer;
