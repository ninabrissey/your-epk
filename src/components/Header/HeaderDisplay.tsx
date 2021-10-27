import { FilmEPK } from '../../types';
import ContactDisplay from '../Contact/ContactDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import ContactContainer from '../Contact/ContactContainer';

interface IHeaderDisplay {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const HeaderDisplay = ({ filmEPK, addFilmInfo }: IHeaderDisplay) => {
  return (
    <>
      {filmEPK?.attributes && (
        <p>{filmEPK.attributes.header_image_description}</p>
      )}
      <ContactContainer filmEPK={filmEPK} addFilmInfo={addFilmInfo} />
    </>
  );
};

export default HeaderDisplay;
