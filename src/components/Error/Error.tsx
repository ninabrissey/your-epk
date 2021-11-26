import Navigation from "../Navigation/Navigation";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Error.scss';

interface IErrorProps {
  accessDenied: boolean;
  notFound: boolean;
  epk_id: any;
}

const Error = ({ accessDenied, notFound, epk_id}: IErrorProps) => {
  return (
    <div>
      <Navigation onEdit={false} />
      <div className='party-title'>
        <div className='no-edit-error'>
          {notFound && <Link to={`/dashboard`}>
              <Button><h1>Page not found. Return to dashboard</h1></Button>
          </Link>}
        </div>
        {accessDenied && 
          <div className='no-edit-error'>
            <h1>It looks like you don't have access to edit this EPK</h1>
            <div className='error-btns'>
              <Link to={`/login`}>
                <Button>Log-in</Button>
              </Link>
              <Link to={`/presskit/${epk_id}`}>
                <Button>Visit Press Kit</Button>
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Error;