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
import { getEPK } from '../../../utils/apiCalls';
import ImagesDisplay from '../../Images/ImagesDisplay';
import ContactDisplay from '../../Contact/ContactDisplay';
// import '../PressPage/PressPage.scss';

const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);

  const [currentImages, setImages] = useState<Image[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getEPK(epk_id).then((info: EPKData) => {
      setEpk(info.data);
      setIsLoading(false);
      // setCurrentAwards(filterIncluded(info.included, 'award'));
      // setPresses(filterIncluded(info.included, 'press'));
      // setImages(filterIncluded(info.included, 'image'));
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
            <HeaderDisplay filmEPK={epk} addFilmInfo={null} isPressPage={true} /> 
            <ContactDisplay filmEPK={epk} />
          </div>

          <div className="press-header-img-container">
            <HeaderImgDisplay filmEPK={epk} epk_id={epk_id}/>
          </div>

          <div className="press-page-below-header">

            {/* {awards.length > 0 !== undefined && (
            <AwardPressDisplay awards={currentAwards} presses={presses} />
            )} */}

            <div className="press-award-display">
              <h2>Articles and Awards</h2>
              {/* <AwardPressDisplay /> */}
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
              <FilmPosterDisplay
                filmEPK={epk}
                epk_id={epk_id}
              />
            </div>

            <div className="tagline-press">
              <h2>Tagline and Logline</h2>
              <TaglinesDisplay filmEPK={epk} />
            </div>

            <div className="film-details-display">
              <h2>Film Details</h2>
              <FilmDetailsDisplay filmEPK={epk} />
            </div>

          </div>
        </section>
      )}
    </div>
  );
};

export default PressPage;
