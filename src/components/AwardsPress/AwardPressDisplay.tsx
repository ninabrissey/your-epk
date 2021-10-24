import { useState, useEffect } from 'react';
import { FilmEPK, Press, Award } from '../../types';
import PressCard from './PressCard';
import AwardCard from './AwardCard';
import './AwardPress.scss';

interface APProps {
  presses: Press[];
  awards: Award[];
}

const AwardPressDisplay = ({ awards, presses }: APProps) => {
  const [currentAwards, setAwards] = useState<any>();
  const [currentPress, setPress] = useState<any>();

  useEffect(() => {
    setAwards(awards);
    setPress(presses);
  }, [awards, presses]);

  let pressCards;
  let awardCards;

  if (presses !== undefined) {
    pressCards = presses.map((press) => {
      return <PressCard key={press.id} press={press} />;
    });
  }
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
      } else {
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

  return (
    <section className="award-press-display">
      {pressCards}
      {awardCards}
    </section>
  );
};

export default AwardPressDisplay;
