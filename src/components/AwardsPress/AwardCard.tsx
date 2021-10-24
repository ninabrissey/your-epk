import { Award } from "../../types"

interface IAwardCard {
  // award: Award
  award: any
}

const AwardCard = ({ award } : IAwardCard) => {
  const awards =  [{
    name: "The Super Award",
    year: "1999",
    award_type: "Shiny"
  }]

  return (
    <article className="award-press-card">
      <p>{award.attributes.year}</p>
      <p>{award.attributes.award_type}</p>
      <p>{award.attributes.name}</p>
    </article>
  )
}

export default AwardCard
