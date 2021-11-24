import Dashboard from '../pages/DashboardPage/Dashboard/Dashboard';
import Error from '../Error/Error';
import EditPage from '../pages/EditPage/EditPage';
import PressPage from '../pages/PressPage/PressPage';
import LoginForm from '../pages/LoginPage/LoginForm';
import Navigation from '../Navigation/Navigation';
import RegisterForm from '../pages/LoginPage/RegisterForm';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' >
          <Redirect to={`/login`} />
        </Route>
        <Route exact path={`/login`}>
          <Navigation onLogin={true}/>
          <LoginForm />
        </Route>
        <Route exact path={`/register`}>
          <RegisterForm />  
        </Route>
        <Route exact path={`/dashboard`}>

          <Dashboard />

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