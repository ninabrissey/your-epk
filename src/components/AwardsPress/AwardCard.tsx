import { Award, Included } from '../../types';
import laurel from './../../images/laurel.png';
import clear from './../../images/clear.png';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AwardPress.scss';
import { relative } from 'path';

interface IAwardCard {
  award: Included;
  style: any;
  isEditing: boolean;
}

const AwardCard = ({ award, style, isEditing }: IAwardCard) => {
  return (
    <article
      style={style}
      className="award-press-card"
    >
      <div className='award-elements'>

        <img className="laurel" src={laurel} alt="laurels" />
        <div className="award-text">
          <p>{award.attributes.name}</p>
          {award.attributes.award_type && <p>{award.attributes.award_type}</p>}
          <p>{award.attributes.year}</p>
        </div>
        {isEditing && <div className='delete-btn'>
          <Fab size="small" aria-label="delete">
            <DeleteOutlineIcon />
          </Fab>
        </div>}
      </div>
    </article>
  );
};

export default AwardCard;

{/* <div
style={{
  textAlign: 'right',
  marginTop: '-30px',
  marginRight: '5px ',
}}
>
<Fab size="small" aria-label="delete">
  <DeleteOutlineIcon />
</Fab>
</div> */}