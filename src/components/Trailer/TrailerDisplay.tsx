import { FilmEPK } from '../../types';

interface ITrailer {
  filmEPK: FilmEPK;
}

const TrailerDisplay = ({ filmEPK } : ITrailer) => {

  return (
    <div>
      {filmEPK.attributes !== undefined && <iframe
        className='trailer'
        title='Embedded YouTube Video'
        width='750'
        height='438.46'
        src={filmEPK.attributes.trailer}
        frameBorder='0'
        allowFullScreen
      />}
    </div> 
  )
}


export default TrailerDisplay;