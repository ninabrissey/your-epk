import { useEffect } from 'react';
import { Included } from '../../types';
import PressCard from './PressCard';
import AwardCard from './AwardCard';
import { getArrayData } from '../../utils/apiCalls';
import './AwardPress.scss';

interface APProps {
  presses: Included[];
  awards: Included[];
}

const AwardPressDisplay = ({ awards, presses }: APProps) => {
  let combinedAwardPress: JSX.Element[] | undefined;


  if (presses !== undefined || awards !== undefined) {
    let pressCards: JSX.Element[];
    let awardCards: JSX.Element[];
    if (awards !== undefined) {
      awardCards = awards.map((award) => {
        return (
          <AwardCard
            key={award.id}
            award={award}
            style={{ background: '#FF904D' }}
          />
        );
      });
    }
    if (presses !== undefined) {
      pressCards = presses.map((press) => {
        return (
          <PressCard
            key={press.id}
            press={press}
            style={{ background: 'whitesmoke', color: '#605E59' }}
          />
        );
      });
    }

    //this function will currently alternate placement of press and award starting with whichever is longer.
    const orderAwardsPress = () => {
      if (awardCards.length >= pressCards.length) {
        return awardCards.reduce(
          (combined: JSX.Element[], award: JSX.Element, i: number) => {
            combined.push(award, pressCards[i]);
            return combined;
          },
          []
        )
      } else {
        return pressCards.reduce(
          (combined: JSX.Element[], press: JSX.Element, i: number) => {
            combined.push(press, awardCards[i]);
            return combined;
          },
          []
        )
      }
    }

    combinedAwardPress = orderAwardsPress();
  }

  return (
    <section>
      {/* <h3 className="awards-press-title">Articles and Awards</h3> */}
      <div className="award-press-display">{combinedAwardPress}</div>
    </section>
  );
};

export default AwardPressDisplay;