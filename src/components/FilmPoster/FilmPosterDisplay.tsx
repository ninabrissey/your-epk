import { FilmEPK } from '../../types';

interface IFilmPoster {
  filmEPK: FilmEPK;
  poster: string
}

const FilmPosterDisplay = ({ filmEPK , poster} : IFilmPoster) => {


  return (
    <section>
      <p>I am the film poster display</p>
       <img 
        className='poster'
        src={poster}
        alt=''
      />
    </section>  
  )
}


export default FilmPosterDisplay;