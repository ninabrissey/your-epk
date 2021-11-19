import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import TitleForm from '../TitleForm/TitleForm';
import EPKContainer from '../EPKContainer/EPKContainer';
import Navigation from '../../../Navigation/Navigation';
import Button from '@mui/material/Button';
import { FilmEPK } from '../../../../types';
import { getUser } from '../../../../utils/apiCalls';

const Dashboard = () => {
  const [allFilms, setAllFilms] = useState<FilmEPK[]>([]);
  const [userError, setUserError] = useState<string>('');

  useEffect(() => {
    getUser()
      .then((data: any) => {
        setAllFilms(data.included);
      })
      .catch((err) => {
        console.log('error', err)
        setUserError(`Error ${err}`)
      });
  }, []);

  return (
    <div>
      <Navigation />
      <main className="edit-main">
        <div className="party-title">
          <h1>To build your <span>electronic press kit</span>, enter your film title below</h1>
          <TitleForm allFilms={allFilms} setAllFilms={setAllFilms} />
        </div>
        {userError && <Link to={`/login`} className='login-btn'>
					<Button variant="text" onClick={() => {

						} }>
						Login to create and edit your EPKs
					</Button>
			</Link>}
        <EPKContainer allFilms={allFilms} setAllFilms={setAllFilms} />
      </main>
    </div>
  );
};

export default Dashboard;
