import { Image } from '../../types';

interface IImage {
  image: Image;
  key: number;
}

const ImageCard = ({ key, image }: IImage) => {
  return (
    <article className="image-card">
      {/* <div className="image-container">
        <img className="image" src={image.link} />
        <p>{image.description}</p>
      </div> */}
    </article>
  );
};

export default ImageCard;
