import { deleteIncluded } from '../../utils/apiCalls';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FilmMemberCard = ({ id, name, role, description, image, removeFilmMember, isEditing } : any) => {

  const deleteFilmMember = () => {
    deleteIncluded('film_fams', id)
      .then(res => {
        if (res.status === 204) {
          removeFilmMember(id)
        }
      })
  }

  return (
    <article className='crew-member-card'>
      <div className='crew-img-wrapper'>
        <img src={image} alt='' />
      </div>
      <div className='crew-info-wrapper'>
        <p className='crew-name'>{name}</p>
        <p>{role}</p>
        <p>{description}</p>
      </div>
      {isEditing && <div className='delete-btn'>
          <Fab size="small" aria-label="delete">
            <DeleteOutlineIcon onClick={deleteFilmMember}/>
          </Fab>
        </div>}
    </article>
  )
}


export default FilmMemberCard;