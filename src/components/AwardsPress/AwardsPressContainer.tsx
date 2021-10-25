import { useState, useEffect } from 'react';
import { postData } from '../../utils/apiCalls';
import { Award, Press } from '../../types';
import AwardPressDisplay from './AwardPressDisplay';
import AwardPressForm from './AwardPressForm';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface APContainerProps {
  addFilmInfo: any;
  awards: Award[] | [];
  presses: Press[] | [];
  epk_id: string;
}

const AwardsPressContainer = ({
  awards,
  presses,
  addFilmInfo,
  epk_id,
}: APContainerProps) => {
  // const AwardsPressContainer = ({filmEPK, addFilmInfo}: APContainerProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [currentAwards, setAwards] = useState<Award[] | []>([]);
  const [currentPresses, setPresses] = useState<Press[] | []>([]);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const postAwardsPress = async (endpoint: any, newItem: any) => {
    setError('');
    try {
      setLoading(true);
      const data = await postData(
        `https://epk-be.herokuapp.com/api/v1/${endpoint}`,
        newItem
      );
      if (endpoint === 'awards') {
        setAwards([...currentAwards, data.data]);
      }
      if (endpoint === 'presses') {
        setPresses([...currentPresses, data.data]);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setAwards(awards);
    setPresses(presses);
  }, [currentAwards, currentPresses]);

  return (
    <div>
      {loading && <p>We are loading you information</p>}
      {error && <p>Something went wrong. Please refresh the page.</p>}
      {!isEditting && !error && (
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={() => setIsEditting(!isEditting)}
        >
          <EditIcon />
        </Fab>
      )}
      {console.log(currentAwards)}
      {awards !== undefined && (
        <AwardPressDisplay awards={currentAwards} presses={presses} />
      )}
      {isEditting && (
        <AwardPressForm
          addFilmInfo={addFilmInfo}
          postAwardsPress={postAwardsPress}
          setIsEditting={setIsEditting}
          isEditting={isEditting}
          epk_id={epk_id}
        />
      )}
    </div>
  );
};

export default AwardsPressContainer;

// if (this.state.selectedMovie === null || undefined ) {
//   return (
//     <div>
//       Loading
//     </div>
//   )
// }
