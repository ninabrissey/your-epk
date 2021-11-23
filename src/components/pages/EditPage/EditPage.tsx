import { useEffect, useState } from 'react';
import { patchData, getEPK } from '../../../utils/apiCalls';
import { FilmEPK, Included } from '../../../types';
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import Error from '../../Error/Error';
import SynopsisContainer from '../../Synopsis/SynopsisContainer';
import FilmDetailsContainer from '../../FilmDetails/FilmDetailsContainer';
import TaglinesContainer from '../../Taglines/TaglinesContainer';
import FilmStillsContainer from '../../FilmStills/FilmStillsContainer';
import FilmStillsForm from '../../FilmStills/FilmStillsForm';
import FilmTeamContainer from '../../Filmteam/FilmTeamContainer';

const EditPage = ({ epk_id }: any) => {
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('');
  const [included, setIncluded] = useState<Array<Included>>([]);

  const getFilmData = () => {
    getEPK(epk_id)
      .then((data) => {
        setFilm(data.data);
        setIncluded(data.included);
        setTitle(formatTitle(data.data.attributes.movie_title));
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    setLoading(true);
    getFilmData();
  }, [epk_id]);

  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, epk_id).then((data) => {
      setFilm(data.data);
    });
  };

  const formatTitle = (title: string) => {
    return title.split(' ').join('-');
  };

  return (
    <div>
      {error && <Error />}
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Navigation onEdit={true} epk_id={epk_id} title={title} />
          {loading && <p>Loading</p>}
          <main className="edit-page">
            <HeaderContainer
              filmEPK={film}
              addFilmInfo={addFilmInfo}
              epk_id={epk_id}
              isPressPage={false}
            />
            <div className="edit-page-below-header">
              {film.id && (
                <AwardsPressContainer
                  addFilmInfo={addFilmInfo}
                  epk_id={epk_id}
                  included={included}
                />
              )}
              <TrailerContainer filmEPK={film} addFilmInfo={addFilmInfo} />
              <div className="container-wrapper">
                <SynopsisContainer filmEPK={film} addFilmInfo={addFilmInfo} />
                <FilmPosterContainer
                  filmEPK={film}
                  addFilmInfo={addFilmInfo}
                  epk_id={epk_id}
                />
              </div>
            </div>
            <FilmStillsContainer epk_id={epk_id} />
            <TaglinesContainer filmEPK={film} addFilmInfo={addFilmInfo} />
            {/* <div className="container-wrapper"> */}
            <FilmDetailsContainer filmEPK={film} addFilmInfo={addFilmInfo} />
            {/* </div> */}

            <FilmTeamContainer
              filmEPK={film}
              epk_id={epk_id}
              addFilmInfo={addFilmInfo}
              included={included}
            />
          </main>
        </div>
      )}
    </div>
  );
};

export default EditPage;
