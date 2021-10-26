import { useState, useEffect } from 'react';
import { FilmEPK } from '../../types';
import HeaderImgForm from './HeaderImgForm';
import HeaderImgDisplay from './HeaderImgDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IHeaderImg {
	filmEPK: FilmEPK;
}

const HeaderImgContainer = ({ filmEPK }: IHeaderImg) => {
	const [headerImg, setHeaderImg] = useState<string>('');
	const [isEditing, setIsEditing] = useState<boolean>(true);

	// const checkData = () => {
	// 	if (filmEPK?.attributes) {
	// 		setHeaderImg(filmEPK.attributes.header_image_url);
	// 	}
	// };

	// useEffect(() => {
	// 	if (filmEPK?.attributes) {
	// 		setHeaderImg(filmEPK.attributes.header_image_url);
	// 	}
	// 	console.log('yeap');
	// }, [headerImg]);

	return (
		<>
			{isEditing && (
				<HeaderImgForm
					setIsEditing={setIsEditing}
					filmEPK={filmEPK}
					setHeaderImg={setHeaderImg}
				/>
			)}

			{!isEditing && (
				<Fab
					// color="secondary"
					size="small"
					aria-label="edit"
					onClick={() => setIsEditing(true)}
					className="header-img-edit-btn"
				>
					<EditIcon />
				</Fab>
			)}

			{!isEditing && <HeaderImgDisplay filmEPK={filmEPK} />}
		</>
	);
};

export default HeaderImgContainer;
