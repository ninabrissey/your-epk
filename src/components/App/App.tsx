import { useState } from 'react';
import Dashboard from '../pages/DashboardPage/Dashboard/Dashboard';
import Error from '../Error/Error';
import EditPage from '../pages/EditPage/EditPage';
import PressPage from '../pages/PressPage/PressPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import LoginForm from '../pages/LoginPage/LoginForm';
import RegisterForm from '../pages/LoginPage/RegisterForm';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { ThisIsUser } from '../../types';

// const userId: number = 1;

function App() {
  const [currUser, setCurrUser] = useState<ThisIsUser>({} as ThisIsUser);


  return (
    <div className="App">

      <Switch>
        <Route exact path='/' >
          <Redirect to={`/login`} />
        </Route>
        <Route exact path={`/login`}>
          <LoginForm setCurrUser={setCurrUser}/>
        </Route>
        <Route exact path={`/register`}>
          <RegisterForm setIsRegistering={true} setIsLoggingIn={true} />  
        </Route>
        <Route exact path={`/dashboard`}>
    
          <Dashboard currUser={currUser} setCurrUser={setCurrUser}/>
    
           {/* <Dashboard currUser={currUser}  />   */}
        </Route>
        <Route exact path='/edit/:epk_id' render={({ match }) =>
          <EditPage epk_id={match.params.epk_id} />
        }>
        </Route>
        <Route exact path='/:epk_id/:title' render={({ match }) =>
          <PressPage title={match.params.title} epk_id={match.params.epk_id} />
        }>
        </Route>
        <Route path='*'>
          <Error userId={1} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;