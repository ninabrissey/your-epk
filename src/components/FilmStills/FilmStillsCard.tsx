// import { Image } from '../../types';

const FilmStillsCard = ({ filmStill }: any) => {
  return (
    <article className="image-card">
      <div className="image-container">
        <img className="image" src={filmStill.link} />
        <p>{filmStill.description}</p>
      </div>
    </article>
  );
};

export default FilmStillsCard;
