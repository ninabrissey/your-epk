import { FilmEPK } from '../../types';

interface IFilmDetails {
  filmEPK: FilmEPK;
}

const FilmDetailsDisplay = ({ filmEPK } : IFilmDetails) => {

  return (
    <section>
      <p>film deets render here</p>
    </section>
  )
}


export default FilmDetailsDisplay;