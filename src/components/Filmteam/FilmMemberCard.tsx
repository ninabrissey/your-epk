

const FilmMemberCard = ({ name, role, description } : any) => {

  return (
    <article>
      <p>name: {name}</p>
      <p>role: {role}</p>
      <p>description: {description}</p>
    </article>
  )
}


export default FilmMemberCard;