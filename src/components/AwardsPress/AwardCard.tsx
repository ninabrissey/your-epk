import { Award, Included } from '../../types';
import laurel from './../../images/laurel.png';
import clear from './../../images/clear.png';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AwardPress.scss';

interface IAwardCard {
  award: any;
  style: any;
}

const AwardCard = ({ award, style }: IAwardCard) => {
  return (
    <article
      style={style}
      className="award-press-card award-press-card-background"
    >
      <div className="award-card-styling-div">
        <div
          style={{
            textAlign: 'right',
            marginTop: '-30px',
            marginRight: '5px ',
          }}
        >
          <Fab size="small" aria-label="delete">
            <DeleteOutlineIcon />
          </Fab>
        </div>
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
