import { useState, useEffect } from 'react';
import {
	getPresignedUrl,
	putToAWS,
	postToDatabase,
} from '../../awsS3/helperFunctions';


const HeaderImgForm = ({ setIsEditing, isEditing, filmEPK }: any) => {
	const [headerFile, setHeaderFile] = useState<any>({});

	useEffect(() => {
    if (headerFile.size > 0) {
      makeAWSpost();
    }
		// console.log('headerFile',headerFile)
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
		const awsRes = await putToAWS(presignedFileParams, headerFile);
		const data: any = await postToDatabase(
			presignedFileParams,
			filmEPK,
			'header_images'
		);
	};

	return (
		<form>
			<div className="header-img-form">
				<h2>Choose an image you'd like to go here</h2>
				<input
					id="header-input"
					type="file"
					accept="image/*"
				/>
				<button
					onClick={(event) => {
						handleSubmit(event);
					}}
					>Save
				</button>
				<button
					onClick={(event) => handleImg(event)}
					>Done editing
				</button>
			</div>
		</form>
	);
};

export default HeaderImgForm;
