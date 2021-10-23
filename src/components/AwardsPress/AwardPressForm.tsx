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
  const [awardName, setAwardName] = useState('')
  const [awardType, setAwardType] = useState('')
  const [awardYear, setAwardYear] = useState('')
  
    const newAward = {
        award: {
          name: publication,
          film_epk_id: 80,
          award_type:link
      } 
  }

  // const newPress = {
  //   press: {
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
          style={{ width: '20%', minWidth: '85px', marginRight: '3%', padding: 0}}
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

        {select === 'award' && <div>
          <TextField style={{ marginRight: '3%'}} id="outlined-basic" name="year" label="year" variant="outlined" value={publication} onChange={e => setAwardYear(e.target.value)}/>
          <TextField style={{ marginRight: '3%'}} id="outlined-basic" name="name" label="name" variant="outlined" value={quote} onChange={e => setAwardName(e.target.value)}/>
          <TextField style={{ marginRight: '3%'}} id="outlined-basic" name="link" label="link" variant="outlined" value={link} onChange={e => setAwardType(e.target.value)}/>
          {/* <Button style={{ background: '#ec5f27', height: '57px'}} variant="text"
          onClick={() => addFilmInfo(newAward)}>save</Button> */}
          <Button style={{ background: '#ec5f27', height: '57px'}} variant="text"
          onClick={() => postData('https://epk-be.herokuapp.com/api/v1/awards', newAward)}>save</Button>
        </div>}

        {select === 'press' && <div>
          <TextField style={{ margin: '1%', width: '150px'}} id="outlined-basic" name="publication" label="publication" variant="outlined" value={publication} size="small" onChange={e => setPublication(e.target.value)}/>
          <TextField style={{ margin: '1%', width: '150px'}} id="outlined-basic" name="link" label="quote" variant="outlined" value={quote} size="small" onChange={e => setQuote(e.target.value)}/>
          <TextField style={{ margin: '1%', width: '150px'}} id="outlined-basic" name="quote" label="link" variant="outlined" value={link} size="small" onChange={e => setLink(e.target.value)}/>
          {/* <Button style={{ background: '#ec5f27', height: '57px'}} variant="text"
          onClick={() => addFilmInfo(newAward)}>save</Button> */}
          <Button style={{ background: '#ec5f27', margin: '1%'}} size="small"  variant="text"
          onClick={() => postData('https://epk-be.herokuapp.com/api/v1/awards', newAward)}>save</Button>
        </div>}

      </div>
      </FormControl>
    </section>
  )
}

export default AwardPressForm
