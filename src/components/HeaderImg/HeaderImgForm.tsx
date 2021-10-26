import { useState, useEffect } from 'react';
import {
	getPresignedUrl,
	fileCheckSum,
	fileToData,
	putToAWS,
	postToDatabase,
} from '../../awsS3/helperFunctions';
import { FilmEPK } from '../../types';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const HeaderImgForm = ({ setIsEditing, filmEPK, setHeaderImg }: any) => {
	// const [headerImg, setHeaderImg] = useState<string>('');
	const [headerFile, setHeaderFile] = useState<any>({});
	// const [testState, setTestState] = useState<string>('');

	useEffect(() => {
		if (headerFile.size > 0) {
			makeAWSpost();
		}
	}, [headerFile]);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const input = document.querySelector<any>('#header-input').files[0];

		if (input) {
			setHeaderFile(input);
		}
		setIsEditing(false);
		// setHeaderImg('');
	};

	const makeAWSpost = async () => {
		const presignedFileParams = await getPresignedUrl(headerFile);
		const awsRes = await putToAWS(presignedFileParams, headerFile);
		const data: any = await postToDatabase(
			presignedFileParams,
			filmEPK,
			'header_images'
		);
		setHeaderImg(data.header_image_url);
	};

	return (
		<form>
			<div className="header-img-form">
				{/* <FormControl sx={{ m: 1, minWidth: 480 }}>
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
				</FormControl> */}
				<h2>Choose an image you'd like to go here</h2>
				<input
					id="header-input"
					type="file"
					accept="image/*"
					name="headerImg"
					// value={headerImg}
					onChange={(e) => setHeaderImg(e.target.value)}
				/>
				{/* <button
					onClick={(event) => {
						handleSubmit(event);
					}}
				>
					Save
				</button> */}
				<FormControl>
					<Button variant="text" onClick={(event) => handleSubmit(event)}>
						save
					</Button>
				</FormControl>
			</div>
		</form>
	);
};

export default HeaderImgForm;
