import { useState, useEffect } from 'react';
// import postData from '../../../utils/apiCalls';
import TitleForm from '../TitleForm/TitleForm';
import EPKContainer from '../EPKContainer/EPKContainer';
import { UserData } from '../../../../types';
import { setupMaster } from 'cluster';
import { userInfo } from 'os';

interface IUser {
  id: number,
  currUser: UserData
}

const Dashboard = ({ id, currUser }: IUser) => {
  const [allFilms, setAllFilms] = useState<object[]>([]);

  useEffect(() => {
    fetch(`https://epk-be.herokuapp.com/api/v1/users/${id}`)
      .then(res => res.json())
      .then((data: any) => {
        setAllFilms(data.included)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main>
      <h2>hey you</h2>
      <h3>{`${currUser.first_name} ${currUser.last_name}`}</h3>
      <TitleForm allFilms={allFilms} id={id} setAllFilms={setAllFilms} />
      <EPKContainer allFilms={allFilms} />
    </main>
  )
}


export default Dashboard;