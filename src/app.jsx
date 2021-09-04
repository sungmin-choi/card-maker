
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import './app.css';
import LoginPage from './components/loginPage/loginPage';
import MakeCardPage from './components/makeCardPage/makeCardPage';
function App({authService}){
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact>
        <LoginPage authService={authService}/>
      </Route>
      <Route path='/makecard' exact>
        <MakeCardPage authService={authService}/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
