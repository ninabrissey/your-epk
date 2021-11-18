import { Link } from 'react-router-dom';
import { FilmEPK } from '../../../../types';
import './EPKCard.scss'
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

interface ITitle {
  title: string,
  image: string,
  epk_id: number,
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>
  allFilms: FilmEPK[],
  key: number
}

const EPKCard = ({ title, image, epk_id, setAllFilms, allFilms }: ITitle) => {

  const deleteEPK = (id: number) => {
    const cookie: any = Cookies.get('csrf-token')
    fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": cookie
      },
      credentials: "include"
    }).then(() => {
      let films: FilmEPK[] = allFilms.filter((film: FilmEPK) => film.id !== epk_id)
      setAllFilms(films)
    })
  }

  return (
    <article className='title-card' >
      <div className="dashboard-image-container">
        <img className="dashboard-image" src={image} alt="" />
      </div>
      <Link to={`/edit/${epk_id}`} className='linked-title' >
        <div key={epk_id} className='go-to-edit'>
          <div className='box-around-text'>
            <h2 className='title-text'>{title}</h2>
          </div>
        </div>
      </Link>

      <Button 
        id="deleteBtnDashboard"
        variant="outlined" 
        size="small" 
        onClick={() => deleteEPK(epk_id)}
        >Delete EPK
      </Button>
    </article>
  )
}

export default EPKCard;