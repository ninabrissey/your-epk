import { Press } from '../../types';
import laurel from './../../images/laurel.png';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AwardPress.scss';

interface IPressCard {
  press: any;
  style: any;
}

// Need to adjust this so the text is showing up. Not sure what the
// issue is so I copied over the exactly styling from the award card

const PressCard = ({ press, style }: IPressCard) => {
  return (
    <article style={style} className="award-press-card-background press-card">
      {/* <Fab
        style={{ marginLeft: '235px', marginBottom: '235px' }}
        size="small"
        aria-label="delete"
      >
        <DeleteOutlineIcon />
      </Fab> */}
      <div>
        <a
          style={{ color: 'inherit' }}
          href={press.attributes.link}
          target="_blank"
        >
          <p>{press.attributes.name_of_publication}</p>
          {press.attributes.description && (
            <p>{press.attributes.description}</p>
          )}
        </a>
      </div>
    </article>
  );
};

export default PressCard;
