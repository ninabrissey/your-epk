import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const TaglinesForm = ({ addFilmInfo, setIsEditing, filmEPK }: any) => {
  const [tagline, setTagline] = useState<string>('');
  const [logline, setLogline] = useState<string>('');

  const handleSubmit = () => {
    const currentTaglines = {
      tag_line: tagline,
      log_line: logline,
    };
    addFilmInfo(currentTaglines);
    setIsEditing(false);
  };

  const checkFormData = () => {
    setTagline(filmEPK.attributes.tagline);
    setLogline(filmEPK.attributes.logline);
  };

  useEffect(() => {
    if (filmEPK?.attributes) {
      checkFormData();
    }
  }, [filmEPK]);

  return (
    <form className="taglines-form-wrapper">
      <p>I am the taglines form</p>
      <div>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Tagline"
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Logline"
            type="text"
            name="logline"
            value={logline}
            onChange={(e) => setLogline(e.target.value)}
          />
        </FormControl>
      </div>
      <Button variant="text" onClick={handleSubmit}>
        save
      </Button>
    </form>
  );
};

export default TaglinesForm;
