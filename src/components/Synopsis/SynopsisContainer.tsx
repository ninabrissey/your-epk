import { useState } from 'react';
import { FilmEPK } from '../../types';
import SynopsisForm from '../Synopsis/SynopsisForm';
import SynopsisDisplay from '../Synopsis/SynopsisDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface ISynopsis {
	filmEPK: FilmEPK;
	addFilmInfo: any;
}

const SynopsisContainer = ({ filmEPK, addFilmInfo }: ISynopsis) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);

	return (
		<div className="synopsis-container">
			<h2>Synopsis</h2>
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
				<SynopsisForm
					filmEPK={filmEPK}
					addFilmInfo={addFilmInfo}
					setIsEditing={setIsEditing}
				/>
			)}
			{!isEditing && <SynopsisDisplay filmEPK={filmEPK} />}
		</div>
	);
};

export default SynopsisContainer;
