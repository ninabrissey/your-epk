import { useState, useEffect } from 'react';
import './Dashboard.scss';
// import postData from '../../../utils/apiCalls';
import TitleForm from '../TitleForm/TitleForm';
import EPKContainer from '../EPKContainer/EPKContainer';
import Navigation from '../../../Navigation/Navigation';
import { ThisIsUser, FilmEPK } from '../../../../types';
import { setupMaster } from 'cluster';
import { userInfo } from 'os';
import Cookies from 'js-cookie';

// interface IUser {
//   // id: number;
//   currUser: ThisIsUser;
// }

const Dashboard = ({ currUser }: any) => {
  const [allFilms, setAllFilms] = useState<FilmEPK[]>([]);

  useEffect(() => {
    const cookie: any = Cookies.get('csrf-token')

    fetch(`https://epk-be.herokuapp.com/api/v2/user`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": cookie
      },  
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data: any) => {
        console.log(currUser)
        setAllFilms(data.included);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <main className="edit-main">
        <div className="party-title">
          <h1>To build your <span>electronic press kit</span>, enter your film title below</h1>
          <TitleForm allFilms={allFilms} setAllFilms={setAllFilms} />
        </div>
       <EPKContainer allFilms={allFilms} setAllFilms={setAllFilms} />
      </main>
    </div>
  );
};

export default Dashboard;
