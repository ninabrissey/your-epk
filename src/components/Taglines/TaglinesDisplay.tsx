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
          <p>Tagline: {filmEPK.attributes.tag_line}</p>
          <p>Logline: {filmEPK.attributes.log_line}</p>
        </>
      )}
    </section>
  );
};

export default TaglinesDisplay;
