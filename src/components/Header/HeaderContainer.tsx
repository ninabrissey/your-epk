import { useState } from 'react';
import { FilmEPK } from '../../types';
import HeaderForm from './HeaderForm';
import HeaderDisplay from './HeaderDisplay';
import HeaderImgContainer from '../HeaderImg/HeaderImgContainer';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IHeader {
	filmEPK: FilmEPK;
	addFilmInfo: any;
}

const HeaderContainer = ({ filmEPK, addFilmInfo }: IHeader) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);

	return (
		<section className="header-container">
			{isEditing && (
				<HeaderForm
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
				>
					<EditIcon />
				</Fab>
			)}
			{!isEditing && (
				<HeaderDisplay filmEPK={filmEPK} addFilmInfo={addFilmInfo} />
			)}
			<HeaderImgContainer filmEPK={filmEPK} />
		</section>
	);
};

export default HeaderContainer;
