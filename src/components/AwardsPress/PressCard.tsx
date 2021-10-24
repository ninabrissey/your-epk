import { Press } from "../../types"

interface IPressCard {
  // press: Press
  press: any
}

const PressCard = ({press} : IPressCard) => {

  return (
    <article className="award-press-display" style={{background: 'blue'}}>
      <a className="award-press-card" href={press.link} target="_blank">
        <h4>{press.attributes.name_of_publication}</h4>
        <h5>{press.attributes.description}</h5>
      </a>
    </article>
  )
}

export default PressCard