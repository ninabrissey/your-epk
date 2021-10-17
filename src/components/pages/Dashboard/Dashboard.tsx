import { useState, useEffect } from 'react';
// import postData from '../../../utils/apiCalls';
import TitleForm from './TitleForm/TitleForm';
import EPKContainer from './EPKContainer/EPKContainer';
import { ThisIsData } from '../../../types';

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



const Dashboard = () => {
  const [check, setCheck] = useState({})

  useEffect(() => {
    setCheck(data.attributes)
  }, [])

  console.log('check: ', check)

  return (
    <main>
      <h2>hey you</h2>
      <TitleForm />
      <EPKContainer />
    </main>
  )
}


export default Dashboard;