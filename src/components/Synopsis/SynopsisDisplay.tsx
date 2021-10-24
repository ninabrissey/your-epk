import { useState, useEffect } from 'react';
import { FilmEPK, Attributes } from '../../types';

interface ISynopsis {
  filmEPK: FilmEPK;
}

const SynopsisDisplay = ({ filmEPK } : ISynopsis) => {
  // const [currentEPK, setCurrentEPK] = useState<Attributes>({} as Attributes)

  // useEffect(() => {
  //   setCurrentEPK(filmEPK.attributes)
  // }, [filmEPK])

  return (
    <section>
      <p>Synopsis renders here</p>
      {filmEPK.attributes !== undefined && <p>{filmEPK.attributes.synopsis}</p>}
    </section>
  )
}


export default SynopsisDisplay;