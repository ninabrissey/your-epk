import { Press, Included } from '../../types';
import laurel from './../../images/laurel.png';
import { deleteIncluded } from '../../utils/apiCalls';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AwardPress.scss';

interface IPressCard {
  press: Included;
  style: any;
  isEditing: boolean;
  removeCard: any;
}

const PressCard = ({ press, style, isEditing, removeCard }: IPressCard) => {
  
  const deletePress = () => {
    deleteIncluded('presses', press.id)
      .then(res => {
        if (res.status === 204) {
        removeCard('press', press.id)
        console.log(`deleted ${press.id}`)
      }
    })
  }
  
  return (
    <article 
      style={style} className="award-press-card"
    >
      <div className='award-elements'>
        <a
          style={{ color: 'inherit' }}
          href={press.attributes.link}
          target="_blank"
        >
          <div className='award-text'>
            <p>{press.attributes.name_of_publication}</p>
            {press.attributes.description && (
              <p>{press.attributes.description}</p>
            )}
          </div>
        </a>
        {isEditing && <div className='delete-btn'>
          <Fab size="small" aria-label="delete">
            <DeleteOutlineIcon onClick={deletePress}/>
          </Fab>
        </div>}
      </div>
    </article>
  );
};

export default PressCard;