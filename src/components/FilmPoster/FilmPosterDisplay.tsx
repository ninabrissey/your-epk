import { FilmEPK } from '../../types';
import { useState, useEffect } from 'react';
import { getEPK } from '../../utils/apiCalls';

interface IFilmPoster {
  filmEPK: FilmEPK;
  epk_id: string;
}

const FilmPosterDisplay = ({ epk_id, filmEPK } : IFilmPoster) => {
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    getEPK(epk_id)
      .then(data => setImage(data.data.attributes.movie_poster_url))
  })

  return (
    <section className="press-poster-wrapper">
      {filmEPK?.attributes && <img 
        className='poster'
        src={image}
        alt=''
      />}
    </section>  
  )
}


export default FilmPosterDisplay;
