import { useState, useEffect} from 'react'
import { film, header } from "../../utils/mockData";
import ContactDisplay from '../Contact/ContactDisplay';

const HeaderDisplay = () => {
  const [filmData, setFilmData] = useState('')
  const [headerData, setHeaderData] = useState(header)

  useEffect(() => {
    setFilmData(film.title)
    setHeaderData(header)
  }, [])

  console.log('headerData: ', headerData)

  return (
    <section>
       {/* className='header-container'> */}
      <img 
        className='header-img' 
        src={headerData.img} 
        alt={filmData}
      />
      <div className='header-info-container'>
        <div>
          <h1>{filmData}</h1>
          <p>{headerData.description}</p>
        </div>
        <ContactDisplay />
      </div>
    </section>
  )
}


export default HeaderDisplay;