import { useState, useEffect } from 'react';
import { getArrayData } from '../../utils/apiCalls';
import { Included } from '../../types';
import FilmStillsDisplay from './FilmStillsDisplay';
import FilmStillsForm from './FilmStillsForm';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const FilmStillsContainer = ({ epk_id }: any) => {
  const [isEditing, setIsEditing] = useState(true);
  const [filmStills, setFilmStills] = useState<Included[] | []>([]);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true);

  const getFilmStills = async () => {
    setLoading(true);
    try {
      const data = await getArrayData('film_stills', epk_id);
      setFilmStills(data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getFilmStills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeFilmMember = (id: string) => {
    const updatedStills = filmStills.filter((still) => still.id !== id);
    setFilmStills(updatedStills);
  };

  return (
    <section className="film-team-container">
      <h2>Film Stills</h2>

      {!isEditing && (
        <Fab
          size="small"
          aria-label="edit"
          onClick={() => setIsEditing(!isEditing)}
          className="film-crew-edit-btn"
        >
          <EditIcon />
        </Fab>
      )}
      <FilmStillsDisplay
        filmStills={filmStills}
        epk_id={epk_id}
        removeFilmMember={removeFilmMember}
        isEditing={isEditing}
      />
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
