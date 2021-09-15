import './App.scss';
import { Header } from './components/Header/Header';
import { Login } from './components/LoginPage/Login';
import { TasksPage } from './components/TasksPage/TasksPage';
import { Register } from './components/RegisterPage/Register';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import background2 from './assets/img/background2.jpg';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <img src={background2} alt="#" />
        <div className="appBackdrop">
          <div className="appWrapper">
            <Route path="/" exact>
              <Redirect to="/tasksPage" />
            </Route>
            <Header />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/tasksPage" render={() => <TasksPage />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
