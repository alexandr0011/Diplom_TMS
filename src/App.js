import './App.scss';
import {Navbar} from "./Components/Nav/Navbar";
import {Header} from "./Components/Header/Header";
import {Content} from "./Components/Content/Content";
import {Login} from "./Components/Login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import {data} from "./data";

export const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className={'contentContainer'}>
                  <Route path='/login' render={() => <Login/>}/>
                  <Route path='/content' render={() => <Content data={data}/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}