

const FilmMemberCard = ({ name, role, description, image } : any) => {

  return (
    <article>
      <p>name: {name}</p>
      <p>role: {role}</p>
      <p>description: {description}</p>
      <img src={image} alt='' />
    </article>
  )
}


export default FilmMemberCard;