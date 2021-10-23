import { Award } from "../../types"

interface IAwardCard {
  award: Award
}

const AwardCard = ({ award } : IAwardCard) => {
  const awards =  [{
    name: "The Super Award",
    year: "1999",
    award_type: "Shiny"
  }]

  return (
    <article className="award-press-card">
      <p>{award.year}</p>
      <p>{award.award_type}</p>
      <p>{award.name}</p>
    </article>
  )
}

export default AwardCard
