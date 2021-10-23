import { Link } from 'react-router-dom';
import { FilmEPK, Attributes } from '../../../../types';
import './EPKCard.scss'
import Button from '@mui/material/Button';

interface ITitle {
  title: string,
  epk_id: number,
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>
  allFilms: FilmEPK[],
  key: number
}

const EPKCard = ({ title, epk_id, setAllFilms, allFilms, key }: ITitle) => {
  const deleteEPK = (id: number) => {
    fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${id}`, {
      method: 'DELETE'
    }).then(() => {
      let films: FilmEPK[] = allFilms.filter((film: FilmEPK) => film.id !== epk_id)
      setAllFilms(films)
    })
  }

  return (
    <article className='title-card' >
      <Link to={`/edit/${epk_id}`} className='linked-title' >
        <div key={epk_id} className='go-to-edit'>
          <p>{title}</p>
        </div>
      </Link>
      {/* <button >Delete</button> */}
      <Button variant="outlined" size="small" onClick={() => deleteEPK(epk_id)}>
        Delete
      </Button>
    </article>
  )
}


export default EPKCard;