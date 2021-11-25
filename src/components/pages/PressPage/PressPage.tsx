import HeaderDisplay from '../../Header/HeaderDisplay';
import HeaderImgDisplay from '../../HeaderImg/HeaderImgDisplay';
import AwardPressDisplay from '../../AwardsPress/AwardPressDisplay';
import TrailerDisplay from '../../Trailer/TrailerDisplay';
import FilmPosterDisplay from '../../FilmPoster/FilmPosterDisplay';
import SynopsisDisplay from '../../Synopsis/SynopsisDisplay';
import FilmDetailsDisplay from '../../FilmDetails/FilmDetailsDisplay';
import TaglinesDisplay from '../../Taglines/TaglinesDisplay';
import { filterIncluded } from '../../../utils/cleanData';
import { FilmEPK, Included } from '../../../types';
import { useEffect, useState } from 'react';
import { getEPK } from '../../../utils/apiCalls';
import { Redirect } from 'react-router-dom';
import ContactDisplay from '../../Contact/ContactDisplay';
import FilmTeamDisplay from '../../Filmteam/FilmTeamDisplay';
import Footer from '../../Footer/Footer';

const PressPage = ({ epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);
  const [awards, setAwards] = useState<Array<Included>>([]);
  const [presses, setPresses] = useState<Array<Included>>([]);
  const [allCrew, setAllCrew] = useState<Array<Included>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getEPK(epk_id)
      .then((info: any) => {
        setEpk(info.data);
        setAwards(filterIncluded(info.included, 'award'));
        setPresses(filterIncluded(info.included, 'press'));
        setIsLoading(false);
      })
        .catch(err => setError(err))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {error && (
        <Redirect to={`/not-found/${epk_id}`} />
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="press-page-container">
          <div className="header-info-container press-header-container">
            <h1>{epk.attributes.movie_title}</h1>
            <HeaderDisplay
              filmEPK={epk}
              addFilmInfo={null}
              isPressPage={true}
            />
            <ContactDisplay filmEPK={epk} />
          </div>

          <div className="press-header-img-container">
            <HeaderImgDisplay filmEPK={epk} epk_id={epk_id} />
          </div>

          <div className="press-page-below-header">
            <div className="press-award-display">
              <h2>Articles and Awards</h2>
              <AwardPressDisplay awards={awards} presses={presses} isEditing={false} removeCard={null}/>
            </div>

            <div className="trailer-display">
              <h2>Trailer</h2>
              <TrailerDisplay filmEPK={epk} />
            </div>

            <div className="synopsis-press">
              <h2>Synopsis</h2>
              <SynopsisDisplay filmEPK={epk} />
            </div>

            <div className="film-poster-display">
              <FilmPosterDisplay filmEPK={epk} epk_id={epk_id} />
            </div>

            <div className="tagline-press">
              <h2>Tagline and Logline</h2>
              <TaglinesDisplay filmEPK={epk} />
            </div>

            <div className="film-details-display">
              <h2>Film Details</h2>
              <FilmDetailsDisplay filmEPK={epk} />
            </div>


            <div className="film-team-display">
              <h2>Film Crew</h2>
              <FilmTeamDisplay allCrew={allCrew} removeFilmMember={null} isEditing={null} />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default PressPage;
