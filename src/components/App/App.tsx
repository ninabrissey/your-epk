import React, { useState, useEffect } from 'react';
// import { TestComponent } from '../../TestComponent';
import Dashboard from '../pages/Dashboard/Dashboard';
import EditPage from '../pages/EditPage/EditPage';
import { Route, Switch } from 'react-router-dom';
import { ThisIsUser, UserData } from '../../types'

interface DBProps {
  id: number,
  name: string,
  setUser: any,
  user: UserData
}

function App() {
  const [currUser, setCurrUser] = useState<UserData>({} as UserData);

  const DashBoardProps: DBProps = { id: 1, name: 'Test', setUser: setCurrUser, user: currUser }

  useEffect(() => {
    // return fetch('')
    //   .then(data => setUser(data.data.attributes))
    setCurrUser({
      "email": "nbrissey@gmail.com",
      "first_name": "Nina",
      "last_name": "Brissey"
    })
  }, [])


  return (
    <div className="App">

      {/* <Switch>
        <Route exact path='/' >
          {a login page will go here}
          <h1>You're on the / page</h1>
        </Route>
        <Route exact path={`/${currUser.first_name}-${currUser.last_name}`}>
          <Dashboard {...DashBoardProps} />
        </Route>
        <Route exact path='/edit-page'> */}
          <EditPage />
          {/* <h2>This is the edit page</h2>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
