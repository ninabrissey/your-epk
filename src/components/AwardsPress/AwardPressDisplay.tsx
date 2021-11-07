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
  let combinedAwardPress: any;


  if (presses !== undefined || awards !== undefined) {
    let pressCards: any;
    let awardCards: any;
    if (awards !== undefined) {
      awardCards = awards.map((award, i) => {
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
      pressCards = presses.map((press, i) => {
        return (
          <PressCard
            key={press.id}
            press={press}
            style={{ background: 'whitesmoke', color: '#605E59' }}
          />
        );
      });
    }

    const orderAwardsPress = () => {
      if (awardCards.length >= pressCards.length) {
        return awardCards.reduce(
          (combined: any, award: any, i: number) => {
            combined.push(award, pressCards[i]);
            return combined;
          },
          []
        )
      } else {
        return pressCards.reduce(
          (combined: any, press: any, i: number) => {
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


// awardPressArray = awardCards.reduce(
//   (awardPress: any, item: any, i: number) => {
//     awardPress.push(item, pressCards[i]);
//     return awardPress;
//   },
//   []
// );