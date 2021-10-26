import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const SynopsisForm = ({ addFilmInfo, setIsEditing, filmEPK }: any) => {
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = () => {
    const currentSynopsis = {
      synopsis: synopsis,
    };
    addFilmInfo(currentSynopsis, 133);
    setIsEditing(false);
    setSynopsis('');
  };

  const checkFormData = () => {
    setSynopsis(filmEPK.attributes.synopsis);
  };

  useEffect(() => {
    if (filmEPK?.attributes) {
      checkFormData();
    }
  }, [filmEPK]);

  return (
    <form className="synopsis-form-wrapper">
      <p>I am the synopsis form</p>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Synopsis"
          multiline
          minRows={4}
          maxRows={4}
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
