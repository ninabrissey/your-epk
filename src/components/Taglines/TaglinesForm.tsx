import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const TaglinesForm = ({ addFilmInfo, setIsEditing } : any ) => {
  const [tagline, setTagline] = useState<string>('')
  const [logline, setLogline] = useState<string>('')

  const handleSubmit = () => {
    const currentTaglines = {
      tag_line: tagline,
      log_line: logline
    }
    addFilmInfo(currentTaglines)
    setIsEditing(false)
    setTagline('')
    setLogline('')
  }

  return (
    <form>
      <p>I am the taglines form</p>
      <FormControl>
        <TextField
          id="outlined-multiline-flexible"
          label="Tagline"
          type='text'
          name='tagline'
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Logline"
          type='text'
          name='logline'
          value={logline}
          onChange={(e) => setLogline(e.target.value)}
        />
        <Button 
          variant="text"
          onClick={handleSubmit}
          >save
        </Button>
       </FormControl>
    </form>
  )
}


export default TaglinesForm;