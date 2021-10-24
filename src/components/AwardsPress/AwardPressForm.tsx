import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import './AwardPressForm.scss';
import PressCard from './PressCard';
// import { createTheme, ThemeProvider } from '@mui/system';

interface IAwardPressForm {
  addFilmInfo: any;
  setIsEditting: any;
  isEditting: boolean;
  epk_id: string;
  postAwardsPress: any;
}

const AwardPressForm = ({
  addFilmInfo,
  postAwardsPress,
  setIsEditting,
  isEditting,
  epk_id,
}: IAwardPressForm) => {
  const [select, setSelect] = useState('');
  const [publication, setPublication] = useState('');
  const [link, setLink] = useState('');
  const [quote, setQuote] = useState('');
  const [awardName, setAwardName] = useState('');
  const [awardType, setAwardType] = useState('');
  const [awardYear, setAwardYear] = useState('');

  const newAward = {
    award: {
      film_epk_id: epk_id,
      name: awardName,
      award_type: awardType,
      year: awardYear,
    },
  };

  const newPress = {
    press: {
      film_epk_id: epk_id,
      publication: publication,
      link: link,
      quote: quote,
    },
  };

  const submitAndClear = (endpoint: string, newItem: any) => {
    if (
      (newAward.award.name && newAward.award.year) ||
      (newPress.press.publication && newPress.press.link)
    ) {
      setPublication('');
      setLink('');
      setQuote('');
      setAwardName('');
      setAwardType('');
      setAwardYear('');
      postAwardsPress(endpoint, newItem);
    }
  };

  return (
    <section>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div className="press-awards-form">
          <InputLabel id="award-or-press">type</InputLabel>
          <Select
            style={{
              width: '20%',
              minWidth: '85px',
              marginRight: '3%',
              padding: 0,
            }}
            labelId="award-or-press"
            id="award-or-press"
            label="select type"
            name="Select"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <MenuItem value={'award'}>award</MenuItem>
            <MenuItem value={'press'}>press</MenuItem>
          </Select>

          {select === 'award' && (
            <>
              <TextField
                style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="name"
                label="name"
                variant="outlined"
                value={awardName}
                onChange={(e) => setAwardName(e.target.value)}
                helperText="name required"
                required
              />
              <TextField
                style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="year"
                label="year"
                variant="outlined"
                value={awardYear}
                onChange={(e) => setAwardYear(e.target.value)}
                helperText="year required"
                required
              />
              <TextField
                style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="type"
                label="type"
                variant="outlined"
                value={awardType}
                onChange={(e) => setAwardType(e.target.value)}
              />
              <Button
                style={{
                  background: '#ec5f27',
                  height: '57px',
                  marginRight: '3%',
                }}
                variant="text"
                onClick={() => submitAndClear('awards', newAward)}
              >
                save
              </Button>
            </>
          )}

          {select === 'press' && (
            <>
              <TextField
                style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="publication"
                label="publication"
                variant="outlined"
                value={publication}
                onChange={(e) => setPublication(e.target.value)}
                helperText="publication required"
                required
              />
              <TextField
                style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="link"
                label="link"
                variant="outlined"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                helperText="link required"
                required
              />
              <TextField
                style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="description"
                label="description/quote"
                variant="outlined"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
              <Button
                style={{
                  background: '#ec5f27',
                  height: '57px',
                  marginRight: '3%',
                }}
                variant="text"
                onClick={() => submitAndClear('presses', newPress)}
              >
                save
              </Button>
            </>
          )}

          <Button
            style={{ background: '#ec5f27', height: '57px', width: '150px' }}
            variant="text"
            onClick={() => setIsEditting(!isEditting)}
          >
            done editting
          </Button>
        </div>
      </FormControl>
    </section>
  );
};

export default AwardPressForm;
