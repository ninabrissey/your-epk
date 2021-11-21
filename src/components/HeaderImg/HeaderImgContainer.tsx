import { useState } from 'react';
import { FilmEPK } from '../../types';
import HeaderImgForm from './HeaderImgForm';
import HeaderImgDisplay from './HeaderImgDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import headerTestImg from '../../images/headerTestImg.png';

interface IHeaderImg {
	filmEPK: FilmEPK;
	epk_id: any
}

const HeaderImgContainer = ({ filmEPK , epk_id }: IHeaderImg) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);

	return (
		<>
			{!isEditing && (
				<HeaderImgForm
					setIsEditing={setIsEditing}
					isEditing={isEditing}
					filmEPK={filmEPK}
				/>
			)}

			{isEditing && (
				<Fab
					size="small"
					aria-label="edit"
					onClick={() => setIsEditing(!isEditing)}
					className="header-img-edit-btn"
				>
					<EditIcon />
				</Fab>
			)}

			{isEditing && <HeaderImgDisplay filmEPK={filmEPK} epk_id={epk_id}/>}
		</>
	);
};

export default HeaderImgContainer;
