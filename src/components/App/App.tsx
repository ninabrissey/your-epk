import React, { useState, useEffect } from 'react';
// import { TestComponent } from '../../TestComponent';
import Dashboard from '../pages/DashboardPage/Dashboard/Dashboard';
import EditPage from '../pages/EditPage/EditPage';
import PressPage from '../pages/PressPage/PressPage';
import { Route, Switch, useParams } from 'react-router-dom';
import { UserData } from '../../types';

const userId: number = 1;

function App() {
  const [currUser, setCurrUser] = useState<UserData>({} as UserData);

  useEffect(() => {
    // fetch(`https://epk-be.herokuapp.com/api/v1/users/${userId}`)
    //   .then((data: any) => setCurrUser(data.data.attributes)) //
    setCurrUser({
      "email": "nbrissey@gmail.com",
      "first_name": "Nina",
      "last_name": "Brissey"
    })
  }, [])


  return (
    <div className="App">

      <Switch>
        <Route exact path='/' >
          {/* {a login page will go here} */}
          <h1>You're on the / page</h1>
        </Route>
        <Route exact path={`/dashboard/${userId}`}>
          <Dashboard currUser={currUser} id={userId} />
        </Route>
        <Route exact path='/edit/:epk_id' render={({ match }) =>
          <EditPage epk_id={match.params.epk_id} />
        }>
        </Route>
        <Route exact path='/:epk_id/:title' render={({ match }) =>
          <PressPage title={match.params.title} epk_id={match.params.epk_id} />
        }>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


// `/${currUser.first_name}-${currUser.last_name}`