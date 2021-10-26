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
		// <div className="header-info-container">
		<>
			{/* <div> */}
			{/* {filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>} */}

			{filmEPK?.attributes && (
				<p>{filmEPK.attributes.header_image_description}</p>
			)}
			{/* </div> */}

			<ContactContainer filmEPK={filmEPK} addFilmInfo={addFilmInfo} />
		</>
		// </div>
	);
};

export default HeaderDisplay;
