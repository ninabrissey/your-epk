import './Navigation.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/EPK_LOGO.png';

const Navigation = ({ onEdit, onLogin, epk_id, title }: any) => {
  return (
    <nav className='navigation'>
      <img className='logo' src={logo} alt='Your EPK logo' />
      {onEdit && <div className='menu'>
        <Link to={`/dashboard`}>Home</Link>
        <Link to={`/${epk_id}/${title}`}>Press Kit</Link>
      </div>}
      {onLogin && <div className='menu'>
        <Link to={`/dashboard`}>Home</Link>
      </div>}
    </nav>
  );
}

export default Navigation;