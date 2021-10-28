import EPKCard from "../EPKCard/EPKCard";
import './EPKContainer.scss'
import { FilmEPK } from '../../../../types';

interface IFilms {
  allFilms: FilmEPK[],
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>
}

const EPKContainer = ({ allFilms, setAllFilms }: IFilms) => {
  const allTitles: any[] = allFilms.map((film: any) => {
    return (
      <EPKCard title={film.attributes.movie_title} image={film.attributes.header_image_url} epk_id={film.id} setAllFilms={setAllFilms} allFilms={allFilms} key={film.id} />
    )
  })

  return (
    <section className='titles'>
      <div className='titles-container'>
        {allTitles}
      </div>
    </section>
  )
}


export default EPKContainer;