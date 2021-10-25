import { FilmEPK } from '../../types';
import ContactDisplay from '../Contact/ContactDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IHeaderDisplay {
	filmEPK: FilmEPK;
	// setIsEditingHeaderImg: any;
	// setIsEditingHeaderDesc: any;
}

const HeaderDisplay = ({ filmEPK }: IHeaderDisplay) => {
	return (
		// <section className="header-container">
		<div className="header-info-container">
			<div>
				{filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>}

				{filmEPK?.attributes && <p>{filmEPK.attributes.header_description}</p>}
			</div>

			<ContactDisplay filmEPK={filmEPK} />
		</div>
		// </section>
	);
};

export default HeaderDisplay;
