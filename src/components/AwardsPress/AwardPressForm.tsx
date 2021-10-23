import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { postData } from '../../utils/apiCalls';
import './AwardPressForm.scss'
// import { createTheme, ThemeProvider } from '@mui/system';

const AwardPressForm = ({addFilmInfo}: any) => {
  const [select, setSelect] = useState('');
  const [publication, setPublication] = useState('');
  const [link, setLink] = useState('');
  const [quote, setQuote] = useState('');

  // const newAward = {
  //     awards: {
  //       name: publication,
  //       year: link,
  //       award_type: quote
  //     }
  //   }

    // const newAward = {
    //     movie_title: publication,
    //     genre: link,
    //     country: quote
    // }
  
    const newAward = {
        award: {
          name: publication,
          film_epk_id: 80,
          award_type:link
      } 
  }

  // const newPress = {
  //   presses: {
  //     publication: publication,
  //     link: link,
  //     quote: quote
  //   }
  // }
  
  // const theme = createTheme({
  //   components: {
  //     // Name of the component
  //     MuiButton: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           backgroundColor: 'orange',
  //         },
  //       },
  //     },
  //   },
  // });

  return (
    <section>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div className="press-awards-form" >
        <InputLabel id="award-or-press">type</InputLabel>
       <Select
          style={{ width: '20%', minWidth: '85px', marginRight: '3%'}}
          labelId="award-or-press"
          id="award-or-press"
          label="type"
          name="Select"
          value={select}
          onChange={e => setSelect(e.target.value)}
        >
          <MenuItem value={'award'}>award</MenuItem>
          <MenuItem value={'press'}>press</MenuItem>
        </Select>
      <TextField style={{ marginRight: '3%'}} id="outlined-basic" name="publication" label="publication" variant="outlined" value={publication} onChange={e => setPublication(e.target.value)}/>
      <TextField style={{ marginRight: '3%'}} id="outlined-basic" name="link" label="quote" variant="outlined" value={quote} onChange={e => setQuote(e.target.value)}/>
      <TextField style={{ marginRight: '3%'}} id="outlined-basic" name="quote" label="link" variant="outlined" value={link} onChange={e => setLink(e.target.value)}/>
      {/* <Button style={{ background: '#ec5f27', height: '57px'}} variant="text"
      onClick={() => addFilmInfo(newAward)}>save</Button> */}
       <Button style={{ background: '#ec5f27', height: '57px'}} variant="text"
      onClick={() => postData('https://epk-be.herokuapp.com/api/v1/awards', newAward)}>save</Button>
      </div>
      </FormControl>
    </section>
  )
}

export default AwardPressForm
