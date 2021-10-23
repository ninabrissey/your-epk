import { Link } from 'react-router-dom';
import { FilmEPK, Attributes } from '../../../../types'

interface ITitle {
  title: string,
  epk_id: number
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>
  allFilms: FilmEPK[]
}

const EPKCard = ({ title, epk_id, setAllFilms, allFilms }: ITitle) => {
  const deleteEPK = (id: number) => {
    fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${id}`, {
      method: 'DELETE'
    }).then(() => {
      let films: FilmEPK[] = allFilms.filter((film: FilmEPK) => film.id !== epk_id)
      setAllFilms(films)
    })
  }

  return (
    <div>
      <Link to={`/edit/${epk_id}`}>
        <article key={epk_id}>
          <p>{title}</p>
        </article>
      </Link>
      <button onClick={() => deleteEPK(epk_id)}>Delete</button>
    </div>
  )
}


export default EPKCard;