import { useState, useEffect } from 'react';
import { FilmEPK, Press, Award } from '../../types';
import PressCard from './PressCard';
import AwardCard from './AwardCard';
import './AwardPressDisplay.scss'

interface APProps {
  presses: Press[],
  awards: Award[]
}

const AwardPressDisplay = ({ awards, presses }: APProps) => {
const [currentAwards, setAwards] = useState<any>()
const [currentPress, setPress] = useState<any>()

useEffect(() => {
  setAwards(awards)
  setPress(presses)
}, [awards, presses])
  
  let pressCards; 
  let awardCards;

  if (presses !== undefined) {
    pressCards = presses.map(press => {
    return <PressCard key={press.id} press={press}/>
  })
}
  if (awards !== undefined) {
    awardCards = awards.map(award => {
    return <AwardCard key={award.id} award={award}/>
  })
}

  return (
    <section className="award-press-display">
      {pressCards}
      {awardCards}
    </section>
  )
}

export default AwardPressDisplay
