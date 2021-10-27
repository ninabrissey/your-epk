import { useState, useEffect } from 'react';
import { FilmEPK, Attributes } from '../../types';
import { getEPK } from '../../utils/apiCalls';

interface ISynopsis {
  filmEPK: FilmEPK;
  epk_id: string;
}

const SynopsisDisplay = ({ filmEPK, epk_id }: ISynopsis) => {
  const [synopsis, setSynopsis] = useState<Attributes>({} as Attributes);

  useEffect(() => {
    getEPK(epk_id).then((data) => setSynopsis(data.data.attributes.synopsis));
  }, []);

  return (
    <section className="synopsis-display">
      {synopsis !== undefined && <p>{synopsis}</p>}
    </section>
  );
};

export default SynopsisDisplay;
