import { Award } from '../../types';
import laurel from './../../images/laurel.png';
import './AwardPress.scss';

interface IAwardCard {
  // award: Award
  award: any;
  style: any;
}

const AwardCard = ({ award, style }: IAwardCard) => {
  return (
    <article style={style} className="award-press-card">
      <div className="award-card-styling-div">
        <img className="laurel" src={laurel} alt="laurels" />
        <div className="award-text">
          <p>{award.attributes.name}</p>
          {award.attributes.award_type && <p>{award.attributes.award_type}</p>}
          <p>{award.attributes.year}</p>
        </div>
      </div>
    </article>
  );
};

export default AwardCard;
