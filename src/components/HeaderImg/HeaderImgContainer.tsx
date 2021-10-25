import { useState } from 'react';
import { FilmEPK } from '../../types';
import HeaderImgForm from './HeaderImgForm';
import HeaderImgDisplay from './HeaderImgDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IHeaderImg {
	filmEPK: FilmEPK;
	addFilmInfo: any;
}

const HeaderImgContainer = ({ filmEPK, addFilmInfo }: IHeaderImg) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);

	return (
		<>
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
				<HeaderImgForm addFilmInfo={addFilmInfo} setIsEditing={setIsEditing} />
			)}

			{!isEditing && <HeaderImgDisplay filmEPK={filmEPK} />}
		</>
	);
};

export default HeaderImgContainer;
