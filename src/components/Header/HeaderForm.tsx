import { useState, useEffect } from 'react';
import ContactForm from '../Contact/ContactForm';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const HeaderForm = ({ addFilmInfo }: any) => {
	const [filmTitle, setFilmTitle] = useState<string>('');
	const [headerDescription, setHeaderDescription] = useState<string>('');
	const [headerImg, setHeaderImg] = useState<string>('');

	useEffect(() => {
		setFilmTitle('Work Please');
	}, []);

	// *** img needs to go through a different patch

	const handleSubmit = () => {
		let currentDescription = {
			header_img: headerImg,
			header_description: headerDescription,
		};
		addFilmInfo(currentDescription);
		clearForm();
		// console.log('currentDescription: ', currentDescription)
	};

	const clearForm = () => {
		setHeaderDescription('');
		setHeaderImg('');
	};

	return (
		<section>
			<p>I am the header form container</p>
			<div className="header-img">
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

			{/* this is the header info area */}
			<div className="header-info-container">
				<h1>{filmTitle}</h1>
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
					<Button variant="text" onClick={handleSubmit}>
						save
					</Button>
				</FormControl>
				<ContactForm addFilmInfo={addFilmInfo} />
			</div>
		</section>
	);
};

export default HeaderForm;
