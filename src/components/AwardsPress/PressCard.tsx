import { Press } from '../../types';
import laurel from './../../images/laurel.png';
import './AwardPress.scss';

interface IPressCard {
  press: any;
  style: any;
}

// Need to adjust this so the text is showing up. Not sure what the
// issue is so I copied over the exactly styling from the award card

const PressCard = ({ press, style }: IPressCard) => {
  return (
    <article
      style={style}
      className="award-press-card award-press-card-background"
    >
      <div className="award-card-styling-div">
        <div className="award-text laurel">
          <a href={press.attributes.link} target="_blank">
            <p>{press.attributes.name_of_publication}</p>
            {press.attributes.description && (
              <p>{press.attributes.description}</p>
            )}
          </a>
        </div>
      </div>
    </article>
  );
};

export default PressCard;
