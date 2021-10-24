import { FilmEPK } from '../../types';

interface ITaglines {
  filmEPK: FilmEPK;
}

const TaglinesDisplay = ({ filmEPK } : Taglines) => {

  return (
    <section>
      <p>Taglines display here!</p>
    </section>
  )
}


export default TaglinesDisplay;