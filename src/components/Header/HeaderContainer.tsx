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
	epk_id: any;
	isPressPage: boolean;
}

const HeaderContainer = ({ filmEPK, addFilmInfo, epk_id, isPressPage }: IHeader) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);

	return (
		<section className="header-container">
			<div className="header-info-container">
				{filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>}
				{isEditing && (
					<HeaderForm
						filmEPK={filmEPK}
						addFilmInfo={addFilmInfo}
						setIsEditing={setIsEditing}
					/>
				)}
				{!isEditing && (
					<Fab
						size="small"
						aria-label="edit"
						onClick={() => setIsEditing(true)}
						className="header-desc-edit-btn"
					>
						<EditIcon />
					</Fab>
				)}
				{!isEditing && (
					<HeaderDisplay filmEPK={filmEPK} addFilmInfo={addFilmInfo} isPressPage={isPressPage} />
				)}
			</div>
			<HeaderImgContainer filmEPK={filmEPK} epk_id={epk_id}/>
		</section>
	);
};

export default HeaderContainer;
