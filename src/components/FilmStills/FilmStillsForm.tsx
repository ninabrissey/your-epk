import { useState } from 'react';
import { postData } from '../../utils/apiCalls';
import {
  getPresignedUrl,
  putToAWS,
  postStillOrTeamToDB,
} from '../../awsS3/helperFunctions';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IFilmStillsForm {
  setIsEditing: any;
  isEditing: boolean;
  epk_id: any;
  filmStills: any;
  setFilmStills: any;
}

const FilmStillsForm = ({
  epk_id,
  setIsEditing,
  filmStills,
  setFilmStills,
  isEditing,
}: IFilmStillsForm) => {
  const [description, setDescription] = useState<string>('');

  const postFilmStill = (filmStill: object) => {
    postData('https://epk-be.herokuapp.com/api/v1/film_stills', filmStill)
      .then((data: any) => {
        handleImageSubmit(data.data.id).then((data) =>
          setFilmStills([...filmStills, data.data])
        );
      })
      .catch((err) => console.log(err));
  };

  const handleTextSubmit = (event: any) => {
    event.preventDefault();

    let filmStill = {
      description: description,
      film_epk_id: epk_id,
    };
    postFilmStill(filmStill);
  };

  const handleImageSubmit = async (filmStillID: any) => {
    const input = document.querySelector<any>('#filmStillInput').files[0];

    if (input.size > 0) {
      const presignedFileParams = await getPresignedUrl(input);
      console.log('presignedFileParams: ', presignedFileParams);
      const awsRes = await putToAWS(presignedFileParams, input);
      const data: any = await postStillOrTeamToDB(
        'film_still_id',
        presignedFileParams,
        filmStillID,
        'film_still_images'
      );
      return data;
    }
  };

  return (
    <section className="film-team-form">
      <form className="film-team-img-form">
        <div>
          <input
            className="image-upload-btn-2"
            id="filmStillInput"
            type="file"
            accept="image/*"
          />
        </div>
      </form>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          size="small"
          margin="dense"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="text" onClick={handleTextSubmit}>
          add still
        </Button>
      </FormControl>

      <FormControl>
        <Button variant="text" onClick={() => setIsEditing(!isEditing)}>
          done editing
        </Button>
      </FormControl>
    </section>
  );
};

export default FilmStillsForm;
