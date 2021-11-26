import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const TrailerForm = ({ addFilmInfo, setIsEditing, filmEPK }: any) => {
  const [filmTrailer, setFilmTrailer] = useState<string>('');

  const checkFormData = () => {
    if (filmEPK?.attributes) {
      setFilmTrailer(
        `https://www.youtube.com/watch?v=${filmEPK.attributes.trailer}`
      );
    }
  };

  useEffect(() => {
    checkFormData();
  }, [filmEPK]);

  const handleSubmit = () => {
    if (filmTrailer) {
      const key = filmTrailer.split('=')[1];
      let currentTrailer = {
        trailer: key,
      };
      addFilmInfo(currentTrailer);
      setIsEditing(false);
    }
  };

  return (
    <form className="trailer-form">
      <FormControl sx={{ m: 1, width: '90%' }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Trailer URL"
          type="text"
          name="trailer"
          value={filmTrailer}
          onChange={(e) => setFilmTrailer(e.target.value)}
          helperText="trailer required"
          required
        />
        <Button variant="text" onClick={handleSubmit}>
          save
        </Button>
      </FormControl>
    </form>
  );
};

export default TrailerForm;
