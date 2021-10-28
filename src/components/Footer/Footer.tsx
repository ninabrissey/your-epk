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
        <img
          className="logo"
          src={logo}
          alt="your EPK logo which is a link to the top of the page"
        />
      {/* </Link> */}
    </footer>    
  )
}


export default Footer;