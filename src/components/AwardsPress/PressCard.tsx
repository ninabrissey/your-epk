import { Press } from '../../types';
import laurel from './../../images/laurel.png';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AwardPress.scss';

interface IPressCard {
  press: any;
  style: any;
  isEditing: boolean;
}

// Need to adjust this so the text is showing up. Not sure what the
// issue is so I copied over the exactly styling from the award card

const PressCard = ({ press, style, isEditing }: IPressCard) => {
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
            <DeleteOutlineIcon />
          </Fab>
        </div>}
      </div>
    </article>
  );
};

export default PressCard;

      {/* <Fab
        style={{ marginLeft: '235px', marginBottom: '235px' }}
        size="small"
        aria-label="delete"
      >
        <DeleteOutlineIcon />
      </Fab> */}