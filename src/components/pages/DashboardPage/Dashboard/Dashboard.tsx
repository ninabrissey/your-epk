import { useState, useEffect } from 'react';
import './Dashboard.scss';
// import postData from '../../../utils/apiCalls';
import TitleForm from '../TitleForm/TitleForm';
import EPKContainer from '../EPKContainer/EPKContainer';
import Navigation from '../../../Navigation/Navigation';
import { UserData, FilmEPK } from '../../../../types';
import { setupMaster } from 'cluster';
import { userInfo } from 'os';

interface IUser {
  id: number,
  currUser: UserData
}

const Dashboard = ({ id, currUser }: IUser) => {
  const [allFilms, setAllFilms] = useState<FilmEPK[]>([]);

  useEffect(() => {
    fetch(`https://epk-be.herokuapp.com/api/v1/users/${id}`)
      .then(res => res.json())
      .then((data: any) => {
        console.log(data)
        setAllFilms(data.included)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div>
      <Navigation />
      <main className='edit-main'>
        <TitleForm allFilms={allFilms} id={id} setAllFilms={setAllFilms} />
        <EPKContainer allFilms={allFilms} setAllFilms={setAllFilms} />
      </main>
    </div>
  )
}


export default Dashboard;