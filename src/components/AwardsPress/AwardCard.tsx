import React from 'react'

const AwardCard = () => {
  const awards =  [{
    name: "The Super Award",
    year: "1999",
    award_type: "Shiny"
  }]

  return (
    <article>
      <p>{awards[0].year}</p>
      <p>{awards[0].award_type}</p>
      <p>{awards[0].name}</p>
    </article>
  )
}

export default AwardCard
