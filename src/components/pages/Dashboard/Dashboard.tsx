import { useState, useEffect } from 'react';
// import postData from '../../../utils/apiCalls';
import TitleForm from './TitleForm/TitleForm';
import EPKContainer from './EPKContainer/EPKContainer';
import { UserData } from '../../../types';
import { setupMaster } from 'cluster';
import { userInfo } from 'os';

const Dashboard = (dbprops: { id: number, name: string, setUser: any, user: UserData }) => {

  console.log('setUser method?', dbprops.user.first_name);

  useEffect(() => {


    // dbprops.setUser({
    //   "email": "rachelmaria@gmail.com",
    //   "first_name": "Nina",
    //   "last_name": "Brissey"
    // })
  }, [])

  return (
    <main>
      <h2>hey you</h2>
      <h3>{dbprops.user.email}</h3>
      <TitleForm {...dbprops} />
      <EPKContainer />
    </main>
  )
}


export default Dashboard;