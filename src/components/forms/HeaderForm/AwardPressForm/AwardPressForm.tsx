import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import type {} from '@mui/lab/themeAugmentation';
import '@mui/lab/themeAugmentation';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import './AwardPressForm.scss'
// import { createTheme, ThemeProvider } from '@mui/system';

const AwardPressForm = () => {
  // const [select, setSelect] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelect(event.target.value);
  // };

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
      <FormControl style={{ height: '50vh'}} sx={{ m: 1, minWidth: 120 }}>
        <div className="press-awards-form" >
        <InputLabel id="award-or-press">type</InputLabel>
       <Select
          style={{ width: '20%', minWidth: '85px', marginBottom: '3%'}}
          labelId="award-or-press"
          id="award-or-press"
          // onChange={handleChange}
          label="type"
        >
          <MenuItem value={'award'}>award</MenuItem>
          <MenuItem value={'press'}>press</MenuItem>
        </Select>
      <TextField style={{ marginBottom: '3%'}} id="outlined-basic" label="publication" variant="outlined" />
      <TextField style={{ marginBottom: '3%'}} id="outlined-basic" label="link" variant="outlined" />
      <TextField style={{ marginBottom: '3%'}} id="outlined-basic" label="quote" variant="outlined" />
      <Button style={{ background: 'orange', height: '57px'}} variant="text">save</Button>
      </div>
      </FormControl>
    </section>
  )
}

export default AwardPressForm
