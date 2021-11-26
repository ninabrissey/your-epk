import './Navigation.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/EPK_LOGO.png';

const Navigation = ({ onEdit, onLogin, epk_id, title }: any) => {
  return (
    <nav className='navigation'>
      <Link to={`/dashboard`}>
        <img className='logo' src={logo} alt='Your EPK logo' />
      </Link>
      {onEdit && <div className='menu'>
        <Link to={`/dashboard`}>Home</Link>
        <Link to={`/presskit/${epk_id}/${title}`}>Press Kit</Link>
      </div>}
      {onLogin && <div className='menu'>
        <Link to={`/dashboard`}>Home</Link>
      </div>}
    </nav>
  );
}

export default Navigation;