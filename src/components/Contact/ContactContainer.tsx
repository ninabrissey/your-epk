import { useState } from 'react';
import { FilmEPK } from '../../types';
import ContactDisplay from './ContactDisplay';
import ContactForm from './ContactForm';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IContact {
	filmEPK: FilmEPK;
	addFilmInfo: any;
}

const ContactContainer = ({ filmEPK, addFilmInfo }: IContact) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);

	return (
		<section>
			{!isEditing && (
				<Fab
					color="secondary"
					aria-label="edit"
					onClick={() => setIsEditing(true)}
				>
					<EditIcon />
				</Fab>
			)}
			{isEditing && (
				<ContactForm addFilmInfo={addFilmInfo} setIsEditing={setIsEditing} />
			)}
			{!isEditing && <ContactDisplay filmEPK={filmEPK} />}
		</section>
	);
};

export default ContactContainer;
