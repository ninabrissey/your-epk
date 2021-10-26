import HeaderDisplay from '../../Header/HeaderDisplay';
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

const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK);
  const [currentAwards, setCurrentAwards] = useState<Array<Included>>([]);
  const [presses, setPresses] = useState<Array<Included>>([]);
  const [currentImages, setImages] = useState<Image[] | []>([]);

  useEffect(() => {
    getEPK(epk_id).then((info: EPKData) => {
      setEpk(info.data);
      // setCurrentAwards(filterIncluded(info.included, 'award'));
      // setPresses(filterIncluded(info.included, 'press'));
      // setImages(filterIncluded(info.included, 'image'));
      // when the endpoints are up and running, we can comment the above in
    });
  }, []);

  return (
    <div>
      {epk.id && (
        <p>{`You've reached press page for ${epk.attributes.movie_title}, id# ${epk.attributes.synopsis}`}</p>
      )}
      <p>{` id# ${epk_id}`}</p>
      <HeaderDisplay filmEPK={epk} />
      {/* {currentAwards !== undefined && (
        <AwardPressDisplay awards={currentAwards} presses={presses} />
      )} */}
      <TrailerDisplay filmEPK={epk} />
      <div className="container-wrapper">
        <SynopsisDisplay filmEPK={epk} />
        <FilmPosterDisplay filmEPK={epk} />
      </div>
      {/* <ImagesDisplay currentImages={currentImages} /> */}
      <FilmDetailsDisplay filmEPK={epk} />
      <TaglinesDisplay filmEPK={epk} />
    </div>
  );
};

export default PressPage;
