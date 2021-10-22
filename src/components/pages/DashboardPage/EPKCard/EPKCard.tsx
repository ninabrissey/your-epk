import { Link } from 'react-router-dom';

interface ITitle {
  title: string,
  epk_id: number
}

const EPKCard = ({ title, epk_id }: ITitle) => {

  return (
    <Link to={`/edit/${epk_id}`}>
      <article key={epk_id}>
        <p>{title}</p>
      </article>
    </Link>
  )
}


export default EPKCard;