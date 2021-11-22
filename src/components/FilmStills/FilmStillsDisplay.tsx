import ImageCard from './FilmStillsCard';
import { Image } from '../../types';

const FilmStillsDisplay = (currentImages: Image[] | [], epk: number) => {
  // const imageCards = images.map((image) => {
  //   return <ImageCard key={image.id} image={image} />;
  // });
  return <div></div>;

  // return <div className="image-display-container">{imageCards}</div>;
};

// const images: Image[] = [
//   {
//     id: 1,
//     film_epk_id: 133,
//     link: 'https://images.squarespace-cdn.com/content/v1/594ea6feccf210e3df36ce8d/1530550829458-1E1T99Y53C81CU09S9P3/Nina+Brissey+and+Robert+Craighead+Amazing+Grace+Film',
//     description: 'Behind the scenes - Robert Craighead and Nina Brissey',
//   },
//   {
//     id: 11,
//     film_epk_id: 133,
//     link: 'https://m.media-amazon.com/images/M/MV5BZmRlNzQwOWUtODk1NC00YjA5LTk2YTQtODFlOGVkNGM2NzFlXkEyXkFqcGdeQXVyMjcwOTg2MzY@._V1_.jpg',
//     description:
//       'Behind the scenes - Katherine Kampko, Nina Brissey, and Robert Craighead',
//   },
//   {
//     id: 14,
//     film_epk_id: 133,
//     link: 'http://static1.squarespace.com/static/594ea6feccf210e3df36ce8d/t/5b484d9488251b39eb13687b/1531465151647/Nina+Brissey+and+Robert+Craighead+Amazing+Grace+.jpg?format=1500w',
//     description: 'Robert Craighead',
//   },
// ];

export default FilmStillsDisplay;
