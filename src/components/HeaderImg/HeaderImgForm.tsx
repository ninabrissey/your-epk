import { useState, useEffect } from 'react';
import {
	getPresignedUrl,
	putToAWS,
	postToDatabase,
} from '../../awsS3/helperFunctions';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


const HeaderImgForm = ({ setIsEditing, isEditing, filmEPK }: any) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [reminder, setReminder] = useState<boolean>(false)

	const handleImg = (event: any) => {
		event.preventDefault();
		const input = document.querySelector<any>('#header-input').files[0];
		
		if (!input) {
			setReminder(true)
		} else {
			setIsLoading(true)
			makeAWSpost(input).then(res => {
				setIsLoading(false)
				setReminder(false)
				setIsEditing(!isEditing)
			})
		}
	}

	const makeAWSpost = async (file: any) => {
		const presignedFileParams = await getPresignedUrl(file);
		await putToAWS(presignedFileParams, file);
		const response = await postToDatabase(
			presignedFileParams,
			filmEPK,
			'header_images'
		);
		return response;
	};

	return (
		<form>
			<div className="header-img-form">
				<h2>Film Cover Photo</h2>
				<input
					className='image-upload-btn'
					id="header-input"
					type="file"
					accept="image/*"
				/>
			{/* <FormControl>
          <Button 
            className='film-team-done-btn'
            variant="text" 
            onClick={(event) => handleSubmit(event)}
            >save
          </Button>
        </FormControl> */}
				{isLoading && <p>Saving image...</p>}
				{reminder &&  <p>Please select an image</p>}
        <FormControl>
          <Button 
            className='film-team-done-btn'
            variant="text" 
            onClick={(event) => handleImg(event)}
            >done editing
          </Button>
        </FormControl>
			</div>
		</form>
	);
};

export default HeaderImgForm;
