interface ITitle {
  title: string
}

const EPKCard = ({ title }: ITitle) => {

  return (
    <article>
      <p>{title}</p>
    </article>
  )
}


export default EPKCard;