import { FilmEPK } from '../../types';
import { useState, useEffect } from 'react';
import { getEPK } from '../../utils/apiCalls';

interface IFilmPoster {
  // filmEPK: FilmEPK;
  // poster: string,
  epk_id: string
}

const FilmPosterDisplay = ({ epk_id} : IFilmPoster) => {
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    getEPK(epk_id)
      .then(data => setImage(data.data.attributes.movie_poster_url))
  })

  return (
    <section>
      <p>I am the film poster display</p>
       <img 
        className='poster'
        src={image}
        alt=''
      />
    </section>  
  )
}


export default FilmPosterDisplay;