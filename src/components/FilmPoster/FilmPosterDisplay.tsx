import { FilmEPK } from '../../types';

interface IFilmPoster {
  filmEPK: FilmEPK;
}

const FilmPosterDisplay = ({ filmEPK } : IFilmPoster) => {

  return (
    <section>
      <p>I am the film poster display</p>
      {filmEPK.attributes !== undefined && <img 
        className='poster'
        src={filmEPK.attributes.movie_poster_url}
        alt=''
      />}
    </section>  
  )
}


export default FilmPosterDisplay;