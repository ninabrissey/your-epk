import { useState, useEffect} from 'react'

interface ITrailer {
  trailer: string
}

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