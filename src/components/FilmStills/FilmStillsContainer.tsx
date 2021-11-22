import { useState } from 'react';
import { postData } from '../../utils/apiCalls';
import { Included, Image } from '../../types';
import FilmStillsDisplay from './FilmStillsDisplay';
import FilmStillsForm from './FilmStillsForm';

interface IFilmStillsContainer {
  included: Included[] | [];
  epk_id: number;
}

// const ImagesContainer = ({ currentImages, epk }: IImageConainer) => {
const FilmStillsContainer = ({ included, epk_id }: IFilmStillsContainer) => {
  const [isEditting, setIsEditting] = useState(false);
  const [images, setImages] = useState<Image[] | []>([]);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(false);

  return (
    <section>
      {/* <FilmStillsDisplay currentImages={images} epk_id={epk} /> */}
      <FilmStillsForm />
    </section>
  );
};

export default FilmStillsContainer;
