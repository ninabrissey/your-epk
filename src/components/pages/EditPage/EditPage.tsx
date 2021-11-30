import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
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
import FilmTeamContainer from '../../Filmteam/FilmTeamContainer';
import Footer from '../../Footer/Footer';
import Cookies from 'js-cookie';

const EditPage = ({ epk_id }: any) => {
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('');
  const [included, setIncluded] = useState<Array<Included>>([]);
  const [hasAccess, setHasAccess] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getFilmData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [epk_id]);

  useEffect(() => {
    const cookie = Cookies.get('csrf-token');

    if (!cookie) {
      setHasAccess(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {!hasAccess && <Redirect to={`/no-edit-access/${epk_id}`} />}
      {error && <Error accessDenied={false} notFound={true} epk_id={0} />}
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

              <FilmStillsContainer epk_id={epk_id} />

              <TaglinesContainer filmEPK={film} addFilmInfo={addFilmInfo} />

              <FilmTeamContainer
                filmEPK={film}
                epk_id={epk_id}
                addFilmInfo={addFilmInfo}
                included={included}
              />

              <FilmDetailsContainer filmEPK={film} addFilmInfo={addFilmInfo} />
            </div>
          </main>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default EditPage;
