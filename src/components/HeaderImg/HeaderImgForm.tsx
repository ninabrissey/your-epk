import { useState } from 'react';
import { FilmEPK } from '../../types';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const HeaderImgForm = ({ filmEPK, addFilmInfo, setIsEditing }: any) => {
	const [headerImg, setHeaderImg] = useState<string>('');

	const handleSubmit = () => {
		addFilmInfo({ header_img: headerImg });
		setIsEditing(false);
		setHeaderImg('');
	};

	return (
		<form>
			<div className="header-img-form">
				<FormControl sx={{ m: 1, minWidth: 480 }}>
					<TextField
						id="outlined-multiline-flexible"
						label="Img URL"
						type="text"
						name="headerImg"
						value={headerImg}
						onChange={(e) => setHeaderImg(e.target.value)}
					/>
					<Button variant="text" onClick={handleSubmit}>
						save
					</Button>
				</FormControl>
			</div>
		</form>
	);
};

export default HeaderImgForm;
