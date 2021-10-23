import { FilmEPK } from '../../types';

interface ISynopsis {
  filmEPK: FilmEPK;
}

const SynopsisDisplay = ({ filmEPK } : ISynopsis) => {

  return (
    <section>
      <p>Synopsis renders here</p>
    </section>
  )
}


export default SynopsisDisplay;