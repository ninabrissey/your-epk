import { useState } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const TrailerForm = ({ addFilmInfo, setIsEditing }: any) => {
  const [filmTrailer, setFilmTrailer] = useState<string>('');

  const handleSubmit = () => {
    const key = filmTrailer.split('=')[1];
    let currentTrailer = {
      trailer: key,
    };
    addFilmInfo(currentTrailer);
    setIsEditing(false);
  };

	return (
		<form className='trailer-form'>
			<FormControl sx={{ m: 1, minWidth: 480 }}>
				<TextField
					id="outlined-multiline-flexible"
					label="Trailer URL"
					type="text"
					name="trailer"
					value={filmTrailer}
					onChange={(e) => setFilmTrailer(e.target.value)}
				/>
				<Button variant="text" onClick={handleSubmit}>
					save
				</Button>
			</FormControl>
		</form>
	);
};

export default TrailerForm;
