import { useState, useEffect} from 'react'
import { headerData } from "../../../utils/mockData";

const HeaderDisplay = () => {
  const [data1, setHeaderData1] = useState(headerData)

  // useEffect(() => {
  //   setHeaderData1(headerData)
  // }, [])

  console.log('headerData: ', data1)

  return (
    <section className='header-display-container'>
      <img src={data1.img} />
      <p>I am the header displayed version</p>
    </section>
  )
}


export default HeaderDisplay;