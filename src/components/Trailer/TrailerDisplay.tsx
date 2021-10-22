
// interface ITrailer {
//   trailer: string
// }


// param= {trailer}: ITrailer
// src={trailer}
const TrailerDisplay = () => {

  return (
    <div className='trailer-container'>
      <iframe
      className='trailer'
        title='Embedded YouTube Video'
        width='750'
        height='438.46'
        src='video url goes here'
        frameBorder='0'
        allowFullScreen
      />
    </div> 
  )
}


export default TrailerDisplay;