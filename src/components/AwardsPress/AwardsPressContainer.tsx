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
  const [isEditting, setIsEditting] = useState(true);
  const [currentAwards, setAwards] = useState<Included[]>([]);
  const [currentPresses, setPresses] = useState<Included[]>([]);
  const [error, setError] = useState<any>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAwards(filterIncluded(included, 'award'));
    setPresses(filterIncluded(included, 'press'));
  }, []);

  const removeCard = (type: string, id: string) => {
    if (type === 'award') {
      const updatedAwards = currentAwards.filter((award) => award.id !== id);
      setAwards(updatedAwards);
    }
    if (type === 'press') {
      const updatedPress = currentPresses.filter((press) => press.id !== id);
      setPresses(updatedPress);
    }
  };

  const postAwardsPress = async (endpoint: any, newItem: any) => {
    setError('');
    setIsLoading(true);
    try {
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
    setIsLoading(false);
  };

  return (
    <div className="awards-press-container">
      <h2 className="awards-press-title">Articles and Awards</h2>
      {!isEditting && !error && (
        <Fab
          size="small"
          aria-label="edit"
          onClick={() => setIsEditting(!isEditting)}
          className="awards-press-edit-btn"
        >
          <EditIcon />
        </Fab>
      )}
      {(currentAwards.length > 0 || currentPresses.length > 0) && (
        <AwardPressDisplay
          awards={currentAwards}
          presses={currentPresses}
          isEditing={isEditting}
          removeCard={removeCard}
        />
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
      {isLoading && <p>We are loading you information</p>}
      {error && <p>Something went wrong. Please refresh the page.</p>}
    </div>
  );
};

export default AwardsPressContainer;
