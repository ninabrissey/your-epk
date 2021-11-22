import { Link } from 'react-router-dom';
import logo from '../../images/EPK_LOGO.png';

const Footer = () => {

  return (
    <footer>
      {/* <Link
        to="/"
        onClick={() => {
          // window.location.reload();
          window.scrollTo(0, 0);
        }}
      > */}
      <p>Powered by</p>
        <Link to={`/dashboard`}>
          <img
            className="logo"
            src={logo}
            alt="your EPK logo which is a link to the top of the page"
          />
        </Link>
      {/* </Link> */}
    </footer>    
  )
}


export default Footer;