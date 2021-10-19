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
    <section className="press-awards-form">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="award-or-press">type</InputLabel>

       <Select
          labelId="award-or-press"
          id="award-or-press"
          // onChange={handleChange}
          label="type"
        >
          <MenuItem value={'award'}>award</MenuItem>
          <MenuItem value={'press'}>press</MenuItem>
        </Select>
      <TextField id="outlined-basic" label="publication" variant="outlined" />
      <TextField id="outlined-basic" label="link" variant="outlined" />
      <TextField id="outlined-basic" label="quote" variant="outlined" />
      <Button variant="text">save</Button>
      </FormControl>
    </section>
  )
}

export default AwardPressForm
