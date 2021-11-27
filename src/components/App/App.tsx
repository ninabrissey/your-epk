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
          <Navigation onLogin={true}/>
          <RegisterForm />  
        </Route>
        <Route exact path={`/dashboard`}>
          <Dashboard />
        </Route>
        <Route exact path='/edit/:epk_id' render={({ match }) =>
          <EditPage epk_id={match.params.epk_id}  />
        }>
        </Route>
        <Route exact path={`/no-edit-access/:epk_id`} render={({ match }) =>
           <Error accessDenied={true} notFound={false} epk_id={match.params.epk_id}/>
        }>
        </Route>        
        <Route path='/presskit/:epk_id' render={({ match }) =>
          <PressPage  epk_id={match.params.epk_id} />
        }>
        </Route>
        <Route path='*'>
          <Error accessDenied={false} notFound={true} epk_id={0}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;