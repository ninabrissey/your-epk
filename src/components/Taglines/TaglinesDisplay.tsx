import { FilmEPK } from '../../types';

interface ITaglines {
  filmEPK: FilmEPK;
}

const TaglinesDisplay = ({ filmEPK }: ITaglines) => {
  return (
    <section className="taglines-section">
      {filmEPK?.attributes && (
        <div className="taglines-display-info">
          <p><span>Tagline: </span>{filmEPK.attributes.tag_line}</p>
          <p><span>Logline: </span>{filmEPK.attributes.log_line}</p>
        </div>
      )}
    </section>
  );
};

export default TaglinesDisplay;
