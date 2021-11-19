

const FilmMemberCard = ({ name, role, description } : any) => {

  return (
    <article>
      {/* <h4>I am the FILM MEMBER CARD</h4> */}
      <p>name: {name}</p>
      <p>role: {role}</p>
      <p>description: {description}</p>
    </article>
  )
}


export default FilmMemberCard;