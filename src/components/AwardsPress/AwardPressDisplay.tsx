import { Included } from '../../types';
import PressCard from './PressCard';
import AwardCard from './AwardCard';
import './AwardPress.scss';

interface APProps {
  presses: Included[];
  awards: Included[];
}

const AwardPressDisplay = ({ awards, presses }: APProps) => {
  let pressCards: any;
  let awardCards: any;

  if (awards !== undefined) {
    awardCards = awards.map((award, i) => {
      if (i % 2 === 0) {
        return (
          <AwardCard
            key={award.id}
            award={award}
            style={{ background: '#FF904D' }}
          />
        );
      } else if (i % 2 === 1) {
        return (
          <AwardCard
            key={award.id}
            award={award}
            style={{ background: '#F1EAE0', color: '#605E59' }}
          />
        );
      }
    });
  }

  if (presses !== undefined) {
    pressCards = presses.map((press, i) => {
      if (i % 2 === 0) {
        return (
          <PressCard
            key={press.id}
            press={press}
            style={{ background: '#FF904D' }}
          />
        );
      } else if (i % 2 === 1) {
        return (
          <PressCard
            key={press.id}
            press={press}
            style={{ background: '#F1EAE0', color: '#605E59' }}
          />
        );
      }
    });
  }

  return (
    <section>
      <h3>Awards Press</h3>
      <div className="award-press-display">
        {pressCards}
        {awardCards}
      </div>
    </section>
  );
};

export default AwardPressDisplay;
