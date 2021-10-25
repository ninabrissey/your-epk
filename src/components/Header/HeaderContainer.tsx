import { useState } from 'react';
import { FilmEPK } from '../../types';
import HeaderForm from './HeaderForm';
import HeaderDisplay from './HeaderDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import ContactContainer from '../Contact/ContactContainer';

interface IHeader {
	filmEPK: FilmEPK;
	addFilmInfo: any;
}

const HeaderContainer = ({ filmEPK, addFilmInfo }: IHeader) => {
	const [isEditingHeaderImg, setIsEditingHeaderImg] = useState<boolean>(true);
	const [isEditingHeaderDesc, setIsEditingHeaderDesc] = useState<boolean>(true);
	const [isEditingContact, setIsEditingContact] = useState<boolean>(true);

	return (
		<section className="header-container">
			{/* {!isEditing && (
				<Fab color="secondary" aria-label="edit">
					<EditIcon />
				</Fab>
			)} */}
			{isEditingHeaderDesc && isEditingHeaderImg && (
				<HeaderForm
					filmEPK={filmEPK}
					addFilmInfo={addFilmInfo}
					// setIsEditingHeaderImg={setIsEditingHeaderImg}
					// setIsEditingHeaderDesc={setIsEditingHeaderDesc}
					// setIsEditingContact={setIsEditingContact}
				/>
			)}
			{/* <ContactContainer filmEPK={filmEPK} addFilmInfo={addFilmInfo} /> */}
			{/* {<HeaderDisplay filmEPK={filmEPK} />} */}
		</section>
	);
};

export default HeaderContainer;
