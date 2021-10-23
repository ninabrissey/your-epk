import { Press } from "../../types"

interface IPressCard {
  press: Press
}

const PressCard = ({press} : IPressCard) => {
  const presses =  [{
    name_of_publication: "TIMES OF SAN DIEGO",
    description: "Amazing Grace,’ by first-time filmmaker Nina Brissey, leads with four nominations. The short tells the story of a Vietnam veteran dealing with alcoholism and PTSD and the daughter who struggles to care for him.",
    link: "https://timesofsandiego.com/arts/2021/05/16/gi-film-fest-goes-virtual-with-largest-slate-ever-while-shining-light-on-women-warriors"
  }]

  return (
    <article>
      <a className="award-press-card" href={presses[0].link} target="_blank">
        <h4>{presses[0].name_of_publication}</h4>
        <h5>{presses[0].description}</h5>
      </a>
    </article>
  )
}

export default PressCard