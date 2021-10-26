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
		<section className="contact-container">
			{isEditing && (
				<ContactForm
					filmEPK={filmEPK}
					addFilmInfo={addFilmInfo}
					setIsEditing={setIsEditing}
				/>
			)}

			{!isEditing && (
				<Fab
					// color="secondary"
					size="small"
					aria-label="edit"
					onClick={() => setIsEditing(true)}
					className="contact-edit-btn"
				>
					<EditIcon />
				</Fab>
			)}

			{!isEditing && <ContactDisplay filmEPK={filmEPK} />}
		</section>
	);
};

export default ContactContainer;
