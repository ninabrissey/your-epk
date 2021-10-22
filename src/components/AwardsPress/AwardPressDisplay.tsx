import {useState} from 'react'
import { FilmEPK, Press, Award } from '../../types';
import './AwardPressDisplay.scss'

interface APProps {
  presses: Press[],
  awards: Award[]
}

const AwardPressDisplay = ({presses, awards}: APProps) => {

  return (
    <section className="award-press-display">
      {presses.length > 0 && <h2>{presses[0].description}</h2>}
      <a className="award-press-card" href="https://timesofsandiego.com/arts/2021/05/16/gi-film-fest-goes-virtual-with-largest-slate-ever-while-shining-light-on-women-warriors" target="_blank">
        <h4>TIMES OF SAN DIEGO</h4>
        <h5>"Amazing Grace,’ by first-time filmmaker Nina Brissey, leads with four nominations. The short tells the story of a Vietnam veteran dealing with alcoholism and PTSD and the daughter who struggles to care for him."</h5>
      </a>
      <a className="award-press-card" href="https://timesofsandiego.com/arts/2021/05/16/gi-film-fest-goes-virtual-with-largest-slate-ever-while-shining-light-on-women-warriors" target="_blank">
        <h4>TIMES OF SAN DIEGO</h4>
        <h5>"Amazing Grace,’ by first-time filmmaker Nina Brissey, leads with four nominations."</h5>
      </a>
      <a className="award-press-card" href="https://timesofsandiego.com/arts/2021/05/16/gi-film-fest-goes-virtual-with-largest-slate-ever-while-shining-light-on-women-warriors" target="_blank">
        <h4>TIMES OF SAN DIEGO</h4>
        <h5>"Amazing Grace,’ by first-time filmmaker Nina Brissey, leads with four nominations. The short tells the story of a Vietnam veteran dealing with alcoholism and PTSD and the daughter who struggles to care for him."</h5>
      </a>
    </section>
  )
}

export default AwardPressDisplay
