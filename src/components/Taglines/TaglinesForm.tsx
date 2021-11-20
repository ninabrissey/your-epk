import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const TaglinesForm = ({ addFilmInfo, setIsEditing, filmEPK }: any) => {
  const [tagline, setTagline] = useState<string>(filmEPK.attributes.tagline);
  const [logline, setLogline] = useState<string>(filmEPK.attributes.logline);

  const handleSubmit = () => {
    const currentTaglines = {
      tag_line: tagline,
      log_line: logline,
    };
    addFilmInfo(currentTaglines);
    setIsEditing(false);
  };

  const checkFormData = () => {
    setTagline(filmEPK.attributes.tag_line);
    setLogline(filmEPK.attributes.log_line);
  };

  useEffect(() => {
    if (filmEPK?.attributes) {
      checkFormData();
    }
  }, [filmEPK]);

  return (
    <form className="taglines-form-wrapper">
      <div>
        <FormControl sx={{ m: 1, minWidth: '50vw' }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Tagline"
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: '50vw' }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Logline"
            type="text"
            name="logline"
            value={logline}
            onChange={(e) => setLogline(e.target.value)}
          />
        </FormControl>
        <Button variant="text" onClick={handleSubmit}>
          save
        </Button>
      </div>
    </form>
  );
};

export default TaglinesForm;
