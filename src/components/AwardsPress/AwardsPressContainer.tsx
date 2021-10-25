import { useState, useEffect } from 'react';
import { postData } from '../../utils/apiCalls';
import { Included } from '../../types';
import AwardPressDisplay from './AwardPressDisplay';
import AwardPressForm from './AwardPressForm';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { filterIncluded } from '../../utils/cleanData';

interface APContainerProps {
  addFilmInfo: any;
  epk_id: string;
  included: Included[];
}

const AwardsPressContainer = ({
  addFilmInfo,
  epk_id,
  included,
}: APContainerProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [currentAwards, setAwards] = useState<Included[]>([]);
  const [currentPresses, setPresses] = useState<Included[]>([]);
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
    setLoading(true);
    setAwards(filterIncluded(included, 'award'));
    setPresses(filterIncluded(included, 'press'));
    console.log('inside useEffect');
    setLoading(false);
  }, []);

  console.log(currentPresses, 'currentPresses');
  console.log(currentAwards, 'currentAwards');

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
      <AwardPressDisplay awards={currentAwards} presses={currentPresses} />
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
