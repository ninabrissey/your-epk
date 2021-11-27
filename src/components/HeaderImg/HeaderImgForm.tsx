import { useState, useEffect } from 'react';
import {
	getPresignedUrl,
	putToAWS,
	postToDatabase,
} from '../../awsS3/helperFunctions';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


const HeaderImgForm = ({ setIsEditing, isEditing, filmEPK }: any) => {
	const [headerFile, setHeaderFile] = useState<any>({});

	useEffect(() => {
    if (headerFile.size > 0) {
      makeAWSpost();
    }
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerFile])

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const input = document.querySelector<any>('#header-input').files[0];

		if (input) {
			setHeaderFile(input);
		}
	};

	const handleImg = (event: any) => {
		event.preventDefault();
		setIsEditing(!isEditing);
	}

	const makeAWSpost = async () => {
		const presignedFileParams = await getPresignedUrl(headerFile);
		await putToAWS(presignedFileParams, headerFile);
		await postToDatabase(
			presignedFileParams,
			filmEPK,
			'header_images'
		);
	};

	return (
		<form>
			<div className="header-img-form">
				<h2>Film Cover Photo</h2>
				{/* <h2>Choose an image you'd like to go here</h2> */}
				<input
					className='image-upload-btn'
					id="header-input"
					type="file"
					accept="image/*"
				/>
				{/* <button
					onClick={(event) => {
						handleSubmit(event);
					}}
					>Save
				</button> */}
				{/* <button
					onClick={(event) => handleImg(event)}
					>Done editing
				</button> */}

			<FormControl>
          <Button 
            className='film-team-done-btn'
            variant="text" 
            onClick={(event) => handleSubmit(event)}
            >save
          </Button>
        </FormControl>

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
