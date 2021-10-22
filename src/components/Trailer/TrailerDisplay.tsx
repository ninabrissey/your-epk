
interface ITrailer {
  trailer: string
}

// need to check if line 16 is passing props correctly
const TrailerDisplay = ({trailerURL}: ITrailer) => {

  return (
    <div className='trailer-container'>
      <iframe
        className='trailer'
        title='Embedded YouTube Video'
        width='750'
        height='438.46'
        src={trailerURL.trailer}
        frameBorder='0'
        allowFullScreen
      />
    </div> 
  )
}


export default TrailerDisplay;