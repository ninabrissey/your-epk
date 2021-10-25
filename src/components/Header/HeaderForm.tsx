import { useState, useEffect } from 'react';
import { FilmEPK } from '../../types';
import ContactContainer from '../Contact/ContactContainer';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

interface IHeader {
	filmEPK: FilmEPK;
	addFilmInfo: any;
	// setIsEditingHeaderImg: any;
	// setIsEditingHeaderDesc: any;
}

const HeaderForm = ({
	filmEPK,
	addFilmInfo,
}: // setIsEditingHeaderImg,
// setIsEditingHeaderDesc,
IHeader) => {
	const [headerDescription, setHeaderDescription] = useState<string>('');
	const [headerImg, setHeaderImg] = useState<string>('');

	const handleImg = () => {
		addFilmInfo({ header_img: headerImg });
		// setIsEditingHeaderImg(false);
		setHeaderImg('');
	};

	const handleDescription = () => {
		addFilmInfo({ header_description: headerDescription });
		// setIsEditingHeaderDesc(false);
		setHeaderDescription('');
	};

	return (
		<section className="header-container">
			<p>HEADER FORM CONTAINER</p>

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
					<Button variant="text" onClick={handleImg}>
						save
					</Button>
				</FormControl>
			</div>

			<div className="header-info-container">
				{filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>}
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<TextField
						id="outlined-multiline-flexible"
						label="Description"
						multiline
						minRows={4}
						maxRows={4}
						type="text"
						name="headerDescription"
						value={headerDescription}
						onChange={(e) => setHeaderDescription(e.target.value)}
					/>
					<Button variant="text" onClick={handleDescription}>
						save
					</Button>
				</FormControl>

				<ContactContainer addFilmInfo={addFilmInfo} filmEPK={filmEPK} />
			</div>
		</section>
	);
};

export default HeaderForm;
