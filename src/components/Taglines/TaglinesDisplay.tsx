import { FilmEPK } from '../../types';

interface ITaglines {
  filmEPK: FilmEPK;
}

const TaglinesDisplay = ({ filmEPK } : ITaglines) => {

  return (
    <section>
      <p>Taglines display here!</p>
    </section>
  )
}


export default TaglinesDisplay;