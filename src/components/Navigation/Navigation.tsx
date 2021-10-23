import { Link } from 'react-router-dom';
import logo from '../../images/EPK_LOGO.png';

const Navigation = ({ onEdit, epk_id, title }: any) => {
  return (
    <nav>
      <img src={logo} alt='Your EPK logo' />
      <Link to={`/dashboard/1`}>Home</Link>
    </nav>
  );
}

export default Navigation;