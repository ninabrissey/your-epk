import { useState } from 'react'
import { FilmEPK } from '../../types'
import AwardPressDisplay from './AwardPressDisplay'
import AwardPressForm from './AwardPressForm'

const AwardsPressContainer = (filmProps: { filmEPK: FilmEPK }) => {
const [isEditting, setIsEditting] = useState(false)

  return (
    <div>
      {isEditting&& <AwardPressForm {...filmProps}/>}
    {!isEditting && <AwardPressDisplay />} 
    </div>
  )
}

export default AwardsPressContainer
