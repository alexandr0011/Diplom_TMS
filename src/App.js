import './App.scss';
import {Header} from "./components/Header/Header";
import {Login} from "./components/LoginPage/Login";
import {Register} from "./components/RegisterPage/Register";
import {TasksPage} from "./components/TasksPage/TasksPage";
import {BrowserRouter, Route} from "react-router-dom";

export const App = () => {
  return (
      <BrowserRouter>
          <div>
              <Header/>
              <Route path='/login' render={() => <Login/>}/>
              <Route path='/register' render={() => <Register/>}/>
              <Route path='/tasksPage' render={() => <TasksPage/>}/>
          </div>
      </BrowserRouter>
  );
}
