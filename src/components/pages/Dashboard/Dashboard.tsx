import { useState, useEffect } from 'react';
import postData from '../../../utils/apiCalls';
import TitleForm from './TitleForm/TitleForm';

const Dashboard = () => {
  const [] = useState()

  useEffect(() => {
    postData()
  }, [])

  return (
    <main>
      <h2>hey you</h2>
    </main>
  )
}


export default Dashboard;