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

const FilmTeamForm = ({ epk_id, setIsEditing, allCrew, setAllCrew }: any) => {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const postFilmFam = (filmTeamMember: object) => {
    postData(
      'https://epk-be.herokuapp.com/api/v1/film_fams',
      filmTeamMember
    ).then((data: any) => {
      // console.log('data in form POST: ', data);
      handleImageSubmit(data.data.id).then((data) =>
        setAllCrew([data.data, ...allCrew])
      );
    });
  };

  const handleTextSubmit = (event: any) => {
    event.preventDefault();
    const input = document.querySelector<any>('#imageInput').files[0];
    if (name && input !== undefined) {
      let filmTeamMember = {
        film_fam: {
          first_name: name,
          role: role,
          description: description,
          film_epk_id: epk_id,
        },
      };
      postFilmFam(filmTeamMember);
    }
  };

  const handleImageSubmit = async (memberID: any) => {
    const input = document.querySelector<any>('#imageInput').files[0];

    if (input.size > 0) {
      const presignedFileParams = await getPresignedUrl(input);
      await putToAWS(presignedFileParams, input);
      const data: any = await postStillOrTeamToDB(
        'film_fam_id',
        presignedFileParams,
        memberID,
        'head_shots'
      );
      return data;
    }
  };

  return (
    <section className="film-team-form">
      <form className="film-team-img-form">
        <div>
          <input
            className="image-upload-btn"
            id="imageInput"
            type="file"
            accept="image/*"
          />
        </div>
      </form>

      <FormControl sx={{ m: 1, minWidth: 120 }} className="film-team-text-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
          margin="dense"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          id="outlined-basic"
          label="Role"
          variant="outlined"
          size="small"
          margin="dense"
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
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
        <Button
          className="add-film-crew-btn"
          variant="text"
          onClick={handleTextSubmit}
        >
          add film crew
        </Button>
      </FormControl>

      <FormControl>
        <Button
          className="done-editing-btn"
          variant="text"
          onClick={() => setIsEditing(false)}
        >
          done editing
        </Button>
      </FormControl>
    </section>
  );
};

export default FilmTeamForm;
