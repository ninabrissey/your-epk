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
import ImagesDisplay from '../../Images/ImagesDisplay';
import ContactDisplay from '../../Contact/ContactDisplay';
// import '../PressPage/PressPage.scss';

const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);
  const [awards, setAwards] = useState<Array<Included>>([]);
  const [presses, setPresses] = useState<Array<Included>>([]);
  // const [currentImages, setImages] = useState<Image[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getEPK(epk_id).then((info: any) => {
      setEpk(info.data);
      setAwards(filterIncluded(info.included, 'award'));
      console.log(info, 'in the press page useEffect');
      setPresses(filterIncluded(info.included, 'press'));
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
            <AwardPressDisplay awards={awards} presses={presses} />

            <div className="press-award-display">
              The is the press container
            </div>

            <div className="trailer-display">
              <TrailerDisplay filmEPK={epk} />
            </div>

            <div className="container-wrapper">
              <SynopsisDisplay filmEPK={epk} />
            </div>

            <div className="film-poster-display">
              <FilmPosterDisplay filmEPK={epk} epk_id={epk_id} />
            </div>

            <div className="film-details-display">
              <FilmDetailsDisplay filmEPK={epk} />
            </div>

            <div className="tagline-display">
              <TaglinesDisplay filmEPK={epk} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PressPage;
