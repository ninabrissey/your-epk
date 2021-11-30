import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const SynopsisForm = ({ addFilmInfo, setIsEditing, filmEPK }: any) => {
  const [synopsis, setSynopsis] = useState('');
  
  useEffect(() => {
    if (filmEPK?.attributes) {
      checkFormData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmEPK]);

  const handleSubmit = () => {
    const currentSynopsis = {
      synopsis: synopsis,
    };
    addFilmInfo(currentSynopsis);
    setIsEditing(false);
  };

  const checkFormData = () => {
    filmEPK.attributes.synopsis ? setSynopsis(filmEPK.attributes.synopsis) : setSynopsis('');
  };

  return (
    <form className="synopsis-form">
      <FormControl sx={{ m: 1, width: '100%' }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Synopsis"
          multiline
          minRows={10}
          maxRows={10}
          type="text"
          name="synopsis"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <Button variant="text" onClick={handleSubmit}>
          save
        </Button>
      </FormControl>
    </form>
  );
};

export default SynopsisForm;
