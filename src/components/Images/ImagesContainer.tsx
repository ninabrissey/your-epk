import { useState } from 'react';
import { postData } from '../../utils/apiCalls';
import { Image } from '../../types';
import ImagesDisplay from './ImagesDisplay';
import ImagesForm from './ImagesForm';

interface IImageConainer {
  images: Image[] | [];
  epk_id: number;
}

// const ImagesContainer = ({ currentImages, epk }: IImageConainer) => {
const ImagesContainer = () => {
  const [isEditting, setIsEditting] = useState(false);
  const [images, setImages] = useState<Image[] | []>([]);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(false);

  return (
    <section>
      {/* <ImagesDisplay currentImages={images} epk_id={epk} /> */}
      <ImagesForm />
    </section>
  );
};

export default ImagesContainer;
