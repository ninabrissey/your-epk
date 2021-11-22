const FilmMemberCard = ({ name, role, description, image } : any) => {

  return (
    <article className='crew-member-card'>
      <div>
        <img src={image} alt='' />
      </div>
      <div>
        <p>name: {name}</p>
        <p>role: {role}</p>
        <p>description: {description}</p>
      </div>
    </article>
  )
}


export default FilmMemberCard;