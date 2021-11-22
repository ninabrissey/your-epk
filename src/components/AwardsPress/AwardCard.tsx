import { Included } from '../../types';
import laurel from './../../images/laurel.png';
// import clear from './../../images/clear.png';
import { deleteIncluded } from '../../utils/apiCalls';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AwardPress.scss';
// import { relative } from 'path';
// import Cookies from 'js-cookie';

interface IAwardCard {
  award: Included;
  style: any;
  isEditing: boolean;
  removeCard: any;
}

const AwardCard = ({ award, style, isEditing, removeCard }: IAwardCard) => {

  const deleteAward = () => {
    deleteIncluded('awards', award.id)
      .then(res => {
        if (res.status === 204) {
        removeCard('award', award.id)
        console.log(`deleted ${award.id}`)
      }
    })
  }

  return (
    <article
      style={style}
      className="award-press-card"
      key={award.id}
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
            <DeleteOutlineIcon onClick={deleteAward}/>
          </Fab>
        </div>}
      </div>
    </article>
  );
};

export default AwardCard;