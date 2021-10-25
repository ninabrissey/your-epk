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
				<HeaderForm
					filmEPK={filmEPK}
					addFilmInfo={addFilmInfo}
					setIsEditing={setIsEditing}
				/>
			)}
			{!isEditing && <HeaderDisplay filmEPK={filmEPK} />}
			<HeaderImgContainer filmEPK={filmEPK} addFilmInfo={addFilmInfo} />
		</section>
	);
};

export default HeaderContainer;
