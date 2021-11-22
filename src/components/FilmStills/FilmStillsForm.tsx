import { useState } from 'react';

interface IFilmStillsForm {
  setIsEditting: any;
  isEditting: boolean;
  epk_id: string;
  postImage: any;
}

const FilmStillsForm = () => {
  const [imageFile, setImageFile] = useState('');

  return (
    <div className="border-container">
      <form>
        <input
          className="images-form-input"
          type="file"
          value={imageFile}
          onChange={(e) => setImageFile(e.target.value)}
          placeholder="add file"
        />
      </form>
    </div>
  );
};

export default FilmStillsForm;
