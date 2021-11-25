import HeaderDisplay from '../../Header/HeaderDisplay';
import HeaderImgDisplay from '../../HeaderImg/HeaderImgDisplay';
import AwardPressDisplay from '../../AwardsPress/AwardPressDisplay';
import TrailerDisplay from '../../Trailer/TrailerDisplay';
import FilmPosterDisplay from '../../FilmPoster/FilmPosterDisplay';
import SynopsisDisplay from '../../Synopsis/SynopsisDisplay';
import FilmDetailsDisplay from '../../FilmDetails/FilmDetailsDisplay';
import TaglinesDisplay from '../../Taglines/TaglinesDisplay';
import { filterIncluded } from '../../../utils/cleanData';
import {
  FilmEPK,
  EPKData,
  Award,
  Press,
  Image,
  Included,
} from '../../../types';
import { useEffect, useState } from 'react';
import { getEPK, getArrayData } from '../../../utils/apiCalls';
import ImagesDisplay from '../../FilmStills/FilmStillsDisplay';
import ContactDisplay from '../../Contact/ContactDisplay';
import FilmTeamDisplay from '../../Filmteam/FilmTeamDisplay';
import Footer from '../../Footer/Footer';

const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);
  const [awards, setAwards] = useState<Array<Included>>([]);
  const [presses, setPresses] = useState<Array<Included>>([]);
  // const [currentImages, setImages] = useState<Image[] | []>([]);
  const [allCrew, setAllCrew] = useState<Array<Included>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getEPK(epk_id).then((info: any) => {
      setEpk(info.data);
      setAwards(filterIncluded(info.included, 'award'));
      console.log(info, 'in the press page useEffect');
      setPresses(filterIncluded(info.included, 'press'));
      setAllCrew(filterIncluded(info.included, 'film_fam'));
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
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
              <AwardPressDisplay
                awards={awards}
                presses={presses}
                isEditing={false}
                removeCard={null}
              />
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
