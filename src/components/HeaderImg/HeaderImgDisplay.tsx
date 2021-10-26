import { FilmEPK } from '../../types';

interface IHeaderImg {
  filmEPK: FilmEPK;
}

const HeaderImgDisplay = ({ filmEPK }: IHeaderImg) => {
  return (
    <section className="header-image-render">
      {filmEPK?.attributes && (
        <img
          className="header-image"
          src={filmEPK.attributes.header_image_url}
          alt=""
        />
      )}
    </section>
  );
};

export default HeaderImgDisplay;
