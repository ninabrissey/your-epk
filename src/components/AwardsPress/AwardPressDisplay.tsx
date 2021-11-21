import { useState, useEffect } from 'react';
import { Included } from '../../types';
import PressCard from './PressCard';
import AwardCard from './AwardCard';
import './AwardPress.scss';

interface APProps {
  presses: Included[];
  awards: Included[];
  isEditing: boolean;
}

const AwardPressDisplay = ({ awards, presses, isEditing }: APProps) => {
  const [combinedAwardPress, setCombined] = useState<JSX.Element[]>([])

  useEffect(() => {
    const award = makeAwards();
    const press = makePresses();

    const combined = orderAwardsPress(award, press)
    setCombined(combined)
  }, [])

  const makeAwards = () => {
    if (awards !== undefined) {
      return awards.map((award) => {
        return (
          <AwardCard
            key={award.id}
            award={award}
            style={{ background: '#FF904D' }}
            isEditing={isEditing}
          />
        );
      });
    }
    return [];
  }

  const makePresses = () => {
    if (presses !== undefined) {
      return presses.map((press) => { 
        return (
          <PressCard
            key={press.id}
            press={press}
            style={{ background: 'whitesmoke', color: '#605E59' }}
            isEditing={isEditing}
          />
        );
      });
    }
    return [];
  }

  //this function will currently alternate placement of press and award starting with whichever is longer.
  const orderAwardsPress = (awardCards: JSX.Element[], pressCards: JSX.Element[]) => {
    if (awardCards.length >= pressCards.length) {
      return awardCards.reduce(
        (combined: JSX.Element[], award: JSX.Element, i: number) => {
          combined.push(award);
          if(pressCards[i]) {
            combined.push(pressCards[i])
          }
          return combined;
        },
        []
      )
    } else {
      return pressCards.reduce(
        (combined: JSX.Element[], press: JSX.Element, i: number) => {
          combined.push(press);
          if (awardCards[i]) {
            combined.push(awardCards[i])
          }
          return combined;
        },
        []
      )
    }
  }

  return (
    <section>
      {/* <h3 className="awards-press-title">Articles and Awards</h3> */}
      <div className="award-press-display">
        {combinedAwardPress}
      </div>
    </section>
  );
};

export default AwardPressDisplay;