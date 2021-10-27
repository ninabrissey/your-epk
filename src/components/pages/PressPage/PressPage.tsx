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
// import '../PressPage/PressPage.scss';

const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);

  const [currentImages, setImages] = useState<Image[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getEPK(epk_id).then((info: EPKData) => {
      setEpk(info.data);
      setIsLoading(false);
      console.log('this is in presspage', info);
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
        <div>
          <p>{`You've reached press page for ${epk.attributes.movie_title}, id# ${epk.attributes.release_year}`}</p>

          <HeaderDisplay filmEPK={epk} addFilmInfo={null} />
          <HeaderImgDisplay filmEPK={epk} epk_id={epk_id} />
          <div className="press-page-below-header">
            {/* {awards.length > 0 !== undefined && (
            <AwardPressDisplay awards={currentAwards} presses={presses} />
          )} */}
            <div className="press-award-display">
              The is the press container
            </div>
            <div className="trailer-display">
              <TrailerDisplay filmEPK={epk} />
            </div>
            <div className="container-wrapper">
              <SynopsisDisplay epk_id={epk_id} filmEPK={epk} />
            </div>
            <div className="film-poster-display">
              <FilmPosterDisplay
                filmEPK={epk}
                // poster={epk.attributes.movie_poster_url}
                epk_id={epk_id}
              />
            </div>
            {/* <ImagesDisplay currentImages={currentImages} /> */}
            <div className="film-details-display">
              <FilmDetailsDisplay filmEPK={epk} />
            </div>
            <div className="tagline-display">
              <TaglinesDisplay filmEPK={epk} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressPage;
