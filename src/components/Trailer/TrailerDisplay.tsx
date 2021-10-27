import { FilmEPK } from '../../types';

interface ITrailer {
  filmEPK: FilmEPK;
}

const TrailerDisplay = ({ filmEPK }: ITrailer) => {
  return (
    <div>
      {filmEPK.attributes !== undefined && (
        <div className="iframe-container-container">
          <iframe
            className="iframe"
            title="Embedded YouTube Video"
            src={`https://www.youtube.com/embed/${filmEPK.attributes.trailer}`}
            // src={`https://www.youtube.com/embed/fXbp6gF5Xxo`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

//youtu.be/fXbp6gF5Xxo

export default TrailerDisplay;
