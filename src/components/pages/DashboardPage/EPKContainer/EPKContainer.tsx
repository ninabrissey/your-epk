import EPKCard from "../EPKCard/EPKCard";
import { FilmEPK } from '../../../../types';

interface IFilms {
  allFilms: FilmEPK[],
  setAllFilms: React.Dispatch<React.SetStateAction<FilmEPK[]>>
}

const EPKContainer = ({ allFilms, setAllFilms }: IFilms) => {
  const allTitles: any[] = allFilms.map((film: any) => {
    return (
      <EPKCard title={film.attributes.movie_title} epk_id={film.id} setAllFilms={setAllFilms} allFilms={allFilms} />
    )
  })

  return (
    <div>
      <p>this is the EPK container, woot</p>
      {allTitles}
    </div>
  )
}


export default EPKContainer;