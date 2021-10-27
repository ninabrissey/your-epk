import { FilmEPK } from '../../types';
import ContactDisplay from '../Contact/ContactDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import ContactContainer from '../Contact/ContactContainer';

interface IHeaderDisplay {
  filmEPK: FilmEPK;
  addFilmInfo: any;
  isPressPage: boolean;
}

const HeaderDisplay = ({ filmEPK, addFilmInfo, isPressPage }: IHeaderDisplay) => {
  return (
    <>
      {filmEPK?.attributes && (
        <p className='press-header-description'>{filmEPK.attributes.header_image_description}</p>
      )}
      {!isPressPage && <ContactContainer filmEPK={filmEPK} addFilmInfo={addFilmInfo} />}
    </>
  );
};

export default HeaderDisplay;
