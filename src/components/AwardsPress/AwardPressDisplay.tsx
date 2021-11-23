import { useState, useEffect } from 'react';
import { Included } from '../../types';
import PressCard from './PressCard';
import AwardCard from './AwardCard';
import { useTheme } from '../../context/ThemeContext';
import './AwardPress.scss';

interface APProps {
  presses: Included[];
  awards: Included[];
  isEditing: boolean;
  removeCard: any;
}

const AwardPressDisplay = ({
  awards,
  presses,
  isEditing,
  removeCard,
}: APProps) => {
  const [combinedAwardPress, setCombined] = useState<JSX.Element[]>([]);

  const { themeColor } = useTheme();

  console.log(themeColor, 'themecolor in Award Press');

  useEffect(() => {}, [themeColor]);

  useEffect(() => {
    const award = makeAwards();
    const press = makePresses();
    const combined = orderAwardsPress(award, press);
    setCombined(combined);
  }, [awards, presses, isEditing]);

  const makeAwards = () => {
    if (awards !== undefined) {
      return awards.map((award) => {
        return (
          <AwardCard
            key={award.id}
            award={award}
            style={{ background: themeColor || '#ffb179' }}
            isEditing={isEditing}
            removeCard={removeCard}
          />
        );
      });
    }
    return [];
  };

  const makePresses = () => {
    if (presses !== undefined) {
      return presses.map((press) => {
        return (
          <PressCard
            key={press.id}
            press={press}
            style={{ background: 'whitesmoke', color: '#605E59' }}
            isEditing={isEditing}
            removeCard={removeCard}
          />
        );
      });
    }
    return [];
  };

  const orderAwardsPress = (
    awardCards: JSX.Element[],
    pressCards: JSX.Element[]
  ) => {
    if (awardCards.length >= pressCards.length) {
      return awardCards.reduce(
        (combined: JSX.Element[], award: JSX.Element, i: number) => {
          combined.push(award);
          if (pressCards[i]) {
            combined.push(pressCards[i]);
          }
          return combined;
        },
        []
      );
    } else {
      return pressCards.reduce(
        (combined: JSX.Element[], press: JSX.Element, i: number) => {
          combined.push(press);
          if (awardCards[i]) {
            combined.push(awardCards[i]);
          }
          return combined;
        },
        []
      );
    }
  };

  return (
    <section>
      {/* <h3 className="awards-press-title">Articles and Awards</h3> */}
      <div className="award-press-display">{combinedAwardPress}</div>
    </section>
  );
};

export default AwardPressDisplay;
