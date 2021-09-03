
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import './app.css';
import LoginPage from './components/loginPage/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact>
        <LoginPage/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
