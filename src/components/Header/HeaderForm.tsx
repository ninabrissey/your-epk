import { useState } from 'react';
import { FilmEPK } from '../../types';
import ContactContainer from '../Contact/ContactContainer';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

interface IHeader {
	filmEPK: FilmEPK;
	addFilmInfo: any;
	setIsEditing: any;
}

const HeaderForm = ({ filmEPK, addFilmInfo, setIsEditing }: IHeader) => {
	const [headerDescription, setHeaderDescription] = useState<string>('');

	const handleSubmit = () => {
		addFilmInfo({ header_description: headerDescription });
		setIsEditing(false);
	};

	return (
		<>
			<p>HEADER FORM CONTAINER</p>
			<div className="header-info-container">
				{filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>}
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<TextField
						id="outlined-multiline-flexible"
						label="Description"
						multiline
						required
						minRows={4}
						maxRows={4}
						type="text"
						name="headerDescription"
						value={headerDescription}
						onChange={(e) => setHeaderDescription(e.target.value)}
					/>
					<Button variant="text" onClick={handleSubmit}>
						save
					</Button>
				</FormControl>

				<ContactContainer addFilmInfo={addFilmInfo} filmEPK={filmEPK} />
			</div>
		</>
	);
};

export default HeaderForm;
