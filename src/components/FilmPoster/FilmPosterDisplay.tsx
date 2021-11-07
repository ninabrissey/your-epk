import { FilmEPK } from '../../types';
import { useState, useEffect } from 'react';
import { getEPK } from '../../utils/apiCalls';
import DownloadBtn from '../DownloadBtn/DownloadBtn';

interface IFilmPoster {
  filmEPK: FilmEPK;
  epk_id: string;
}

const FilmPosterDisplay = ({ epk_id, filmEPK }: IFilmPoster) => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    getEPK(epk_id).then((data) =>
      setImage(data.data.attributes.movie_poster_url)
    );
  });

  return (
    <section className="press-poster-wrapper">
      {filmEPK?.attributes && (
        // <>
        //   <a href={image} download>
        <img className="poster" id="poster" src={image} alt="" />
        //   </a>
        // </>
      )}
      {image && <DownloadBtn image={image} />}
    </section>
  );
};

export default FilmPosterDisplay;
