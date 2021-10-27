import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const FilmDetailsForm = ({
  addFilmInfo,
  setIsEditing,
  filmEPK,
  isEditing,
}: any) => {
  const [genre, setGenre] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [releaseYear, setReleaseYear] = useState<string>('');
  const [runtime, setRuntime] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [website, setWebsite] = useState<string>('');

  const handleSubmit = () => {
    const currentFilmDetails = {
      genre: genre,
      country: country,
      release_year: releaseYear,
      run_time: runtime,
      language: language,
      budget: budget,
      production_company: company,
      website: website,
    };
    addFilmInfo(currentFilmDetails);
    setIsEditing(!isEditing);
  };

  const clearForms = () => {
    setGenre('');
    setCountry('');
    setReleaseYear('');
    setRuntime('');
    setLanguage('');
    setBudget('');
    setCompany('');
    setWebsite('');
  };

  const checkFormData = () => {
    if (filmEPK?.attributes) {
      setGenre(filmEPK.attributes.genre);
      setCountry(filmEPK.attributes.country);
      setReleaseYear(filmEPK.attributes.release_year);
      setRuntime(filmEPK.attributes.run_time);
      setLanguage(filmEPK.attributes.language);
      setBudget(filmEPK.attributes.budget);
      setCompany(filmEPK.attributes.production_company);
      setWebsite(filmEPK.attributes.website);
    }
  };

  useEffect(() => {
    checkFormData();
  }, [filmEPK]);

  return (
    <form className="film-details-form">
      {/* <p>I am the film details form</p> */}
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} className="form-section">
          <TextField
            id="outlined-multiline-flexible"
            label="Genre"
            margin="dense"
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Country"
            margin="dense"
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Release Year"
            margin="dense"
            type="text"
            name="releaseYear"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Runtime"
            margin="dense"
            type="text"
            name="runtime"
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} className="form-section">
          <TextField
            id="outlined-multiline-flexible"
            label="Language"
            margin="dense"
            type="text"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Budget"
            margin="dense"
            type="text"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Company"
            margin="dense"
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Website"
            margin="dense"
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </FormControl>
      </div>
      <Button variant="text" onClick={handleSubmit}>
        save
      </Button>
    </form>
  );
};

export default FilmDetailsForm;
