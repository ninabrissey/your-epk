import { useState, useEffect } from 'react';
// import postData from '../../../utils/apiCalls';
import TitleForm from '../TitleForm/TitleForm';
import EPKContainer from '../EPKContainer/EPKContainer';
import { UserData } from '../../../../types';
import { setupMaster } from 'cluster';
import { userInfo } from 'os';

interface IDashboard {
  films: object[],
  id: number,
  setAllFilms: React.Dispatch<React.SetStateAction<object[]>>,
  allFilms: object[]
}

const Dashboard = (userProps: { id: number, name: string, setUser: any, user: UserData }) => {
  const [allFilms, setAllFilms] = useState<object[]>([]);

  const dashboardProps: IDashboard = {
    films: allFilms,
    id: userProps.id,
    setAllFilms: setAllFilms,
    allFilms: allFilms
  }

  useEffect(() => {
    fetch(`https://epk-be.herokuapp.com/api/v1/users/${userProps.id}`)
      .then(res => res.json())
      .then((data: any) => {
        setAllFilms(data.included)
      })
      .catch(err => console.log(err))
  }, [])

  // pass all Films to  

  return (
    <main>
      <h2>hey you</h2>
      <h3>{`${userProps.user.first_name} ${userProps.user.last_name}`}</h3>
      <TitleForm {...dashboardProps} />
      <EPKContainer />
    </main>
  )
}


export default Dashboard;