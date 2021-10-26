import { useEffect, useState } from 'react';
import { patchData, getEPK } from '../../../utils/apiCalls';
import { FilmEPK, Included } from '../../../types';
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import './EditPage.scss';

import SynopsisContainer from '../../Synopsis/SynopsisContainer';
import FilmDetailsContainer from '../../FilmDetails/FilmDetailsContainer';
import TaglinesContainer from '../../Taglines/TaglinesContainer';
import './EditPage.scss';
import ImagesContainer from '../../Images/ImagesContainer';
import ImagesForm from '../../Images/ImagesForm';

const EditPage = ({ epk_id }: any) => {
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('');
  const [included, setIncluded] = useState<Array<Included>>([]);

  const getFilmData = () => {
    getEPK(epk_id).then((data) => {
      setFilm(data.data);
      setIncluded(data.included);
      setTitle(formatTitle(data.data.attributes.movie_title));
    });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getFilmData();
  }, []);

  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 133).then((data) => setFilm(data.data));
  };

  const formatTitle = (title: string) => {
    return title.split(' ').join('-');
  };

  return (
    <div>
      {loading && <p>Loading</p>}
      <Navigation onEdit={true} epk_id={epk_id} title={title} />
      <main className="edit-page">
        <HeaderContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        {included.length > 0 ||
          (film.id && (
            <AwardsPressContainer
              addFilmInfo={addFilmInfo}
              epk_id={epk_id}
              included={included}
            />
          ))}
        {included.length > 0 && film.id && (
          <AwardsPressContainer
            addFilmInfo={addFilmInfo}
            epk_id={epk_id}
            included={included}
          />
        )}
        <TrailerContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <div className="container-wrapper">
          <SynopsisContainer filmEPK={film} addFilmInfo={addFilmInfo} />
          <FilmPosterContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        </div>
        {/* <ImagesContainer epk_id={epk_id} images={images} /> */}
        <ImagesForm />
        <FilmDetailsContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <TaglinesContainer filmEPK={film} addFilmInfo={addFilmInfo} />
      </main>
    </div>
  );
};

export default EditPage;
