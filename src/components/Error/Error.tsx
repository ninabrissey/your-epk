import Navigation from "../Navigation/Navigation";
import { Link } from 'react-router-dom';

const Error = ({ userId }: any) => {
  return (
    <div>
        <Navigation onEdit={false} />
        <Link to={`/dashboard/${userId}`}>
            <h2>Page not found. Return to dashboard</h2>
        </Link>
    </div>
  )
}

export default Error;