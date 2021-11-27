import { deleteIncluded } from '../../utils/apiCalls';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FilmStillsCard = ({
  id,
  filmStill,
  removeFilmMember,
  isEditing,
}: any) => {
  const deleteStill = () => {
    deleteIncluded('film_stills', id).then((res) => {
      if (res.status === 204) {
        removeFilmMember(id);
      }
    });
  };

  return (
    <article className="film-stills-card">
      <div className="still-img-wrapper">
        <img src={filmStill.attributes.film_still_url} alt="" />
        <div className="still-info-wrapper">
          <p>{filmStill.attributes.description}</p>
        </div>
      </div>
      {isEditing && (
        <div className="delete-btn">
          <Fab size="small" aria-label="delete">
            <DeleteOutlineIcon onClick={deleteStill} />
          </Fab>
        </div>
      )}
    </article>
  );
};

export default FilmStillsCard;
