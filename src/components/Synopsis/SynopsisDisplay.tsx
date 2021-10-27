import { FilmEPK } from '../../types';

interface ISynopsis {
  filmEPK: FilmEPK;
}

const SynopsisDisplay = ({ filmEPK }: ISynopsis) => {
  return (
    <section className="synopsis-display">
      {filmEPK?.attributes && <p>{filmEPK.attributes.synopsis}</p>}
    </section>
  );
};

export default SynopsisDisplay;
