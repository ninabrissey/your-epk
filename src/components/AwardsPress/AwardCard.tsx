import { Award } from "../../types"

interface IAwardCard {
  // award: Award
  award: any
}

const AwardCard = ({ award } : IAwardCard) => {

  return (
    <article className="award-press-card">
      <p>{award.attributes.name}</p>
      {award.attributes.award_type && <p>{award.attributes.award_type}</p>}
      <p>{award.attributes.year}</p>
    </article>
  )
}

export default AwardCard
