import { Link } from 'react-router-dom';
import logo from '../../images/EPK_LOGO.png';

const Navigation = ({ onEdit, epk_id, title }: any) => {
  return (
    <nav>
      <img src={logo} alt='Your EPK logo' />
      <Link to={`/dashboard/1`}>Home</Link>
      {onEdit && <Link to={`/${epk_id}/${title}`}>Press Kit</Link>}
    </nav>
  );
}

export default Navigation;