import { FilmEPK } from '../../types';

interface ITaglines {
  filmEPK: FilmEPK;
}

const TaglinesDisplay = ({ filmEPK }: ITaglines) => {
  return (
    <section>
      <p>Taglines display here!</p>
      {filmEPK?.attributes && (
        <div>
          <p>{filmEPK.attributes.tag_line}</p>
          <p>{filmEPK.attributes.log_line}</p>
        </div>
      )}
    </section>
  );
};

export default TaglinesDisplay;
