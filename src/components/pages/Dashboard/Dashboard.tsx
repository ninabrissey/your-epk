import { useState, useEffect } from 'react';
// import postData from '../../../utils/apiCalls';
import TitleForm from './TitleForm/TitleForm';
import EPKContainer from './EPKContainer/EPKContainer';
import { UserData } from '../../../types';
import { setupMaster } from 'cluster';
import { userInfo } from 'os';

// this will be used with the network request most likely
// interface DashBoardProps {
//   data: ThisIsData
// }


// this will not live here
const data = {
  id: 1,
  type: 'film_epk',
  attributes: {
    user_id: 1,
    movie_title: 'Jimmies Cookies',
    genre: 'horror',
    country: 'vietnam',
    release_year: 2013,
    run_time: 223,
    language: 'Vietnamese',
    budget: 1000000,
    website: 'http://www.example.com',
    production_company: 'Universal Studios',
    distribution: 'distribution'
  }
}

const Dashboard = (dbprops: { id: number, name: string, setUser: any, user: UserData }) => {

  console.log('setUser method?', dbprops.user.first_name);

  useEffect(() => {
    dbprops.setUser({
      "email": "rachelmaria@gmail.com",
      "first_name": "Nina",
      "last_name": "Brissey"
    })
  }, [])

  return (
    <main>
      <h2>hey you</h2>
      <h3>{dbprops.user.email}</h3>
      <TitleForm />
      <EPKContainer />
    </main>
  )
}


export default Dashboard;