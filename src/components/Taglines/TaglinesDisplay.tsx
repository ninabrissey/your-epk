import { FilmEPK } from '../../types';

interface ITaglines {
  filmEPK: FilmEPK;
}

const TaglinesDisplay = ({ filmEPK }: ITaglines) => {
  return (
    <section className="taglines-display">
      {/* <p>Taglines display here!</p> */}
      {filmEPK?.attributes && (
        <>
          <p><span>Tagline: </span>{filmEPK.attributes.tag_line}</p>
          <p><span>Logline: </span>{filmEPK.attributes.log_line}</p>
        </>
      )}
    </section>
  );
};

export default TaglinesDisplay;
