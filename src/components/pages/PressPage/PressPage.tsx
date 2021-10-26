import HeaderDisplay from '../../Header/HeaderDisplay';
import HeaderImgDisplay from '../../HeaderImg/HeaderImgDisplay';
import AwardPressDisplay from '../../AwardsPress/AwardPressDisplay';
import TrailerDisplay from '../../Trailer/TrailerDisplay';
import FilmPosterDisplay from '../../FilmPoster/FilmPosterDisplay';
import SynopsisDisplay from '../../Synopsis/SynopsisDisplay';
import FilmDetailsDisplay from '../../FilmDetails/FilmDetailsDisplay';
import TaglinesDisplay from '../../Taglines/TaglinesDisplay';
// import { filterIncluded } from '../../../utils/cleanData';
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

const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);
  const [currentAwards, setCurrentAwards] = useState<Array<Included>>([]);
  const [presses, setPresses] = useState<Array<Included>>([]);
  const [currentImages, setImages] = useState<Image[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getEPK(epk_id).then((info: EPKData) => {
      setEpk(info.data);
      setIsLoading(false)
      console.log('this is epk',epk)
      // setCurrentAwards(filterIncluded(info.included, 'award'));
      // setPresses(filterIncluded(info.included, 'press'));
      // setImages(filterIncluded(info.included, 'image'));
      // when the endpoints are up and running, we can comment the above in
    });
  }, []);

  return (
    <div>

    {isLoading ? <p>Loading...</p> : <div>
      <p>{`You've reached press page for ${epk.attributes.movie_title}, id# ${epk.attributes.release_year}`}</p> 
        <HeaderDisplay filmEPK={epk} addFilmInfo={null}/>
        <HeaderImgDisplay filmEPK={epk} epk_id={epk_id}/> 
        {/* {currentAwards !== undefined && (
          <AwardPressDisplay awards={currentAwards} presses={presses} />
        )} */}
        <TrailerDisplay filmEPK={epk} />
        <div className="container-wrapper">
          <SynopsisDisplay filmEPK={epk} />
          <FilmPosterDisplay epk_id={epk_id}/>
        </div>
        {/* <ImagesDisplay currentImages={currentImages} /> */}
        <FilmDetailsDisplay filmEPK={epk} />
        <TaglinesDisplay filmEPK={epk} /> 
      </div>}
    </div>
  );
};

export default PressPage;
