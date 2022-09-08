import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Footer from "./components/pages/Footer";

import Home from './components/pages/Home';
import Spanish from "./components/pages/Spanish";
import Mobility from "./components/pages/Mobility";
import Menu from './components/pages/Menu';
import LeadershipManagement from "./components/pages/leadership-management/LeadershipManagement";
import CivicEngagement from "./components/pages/leadership-management/CivicEngagement";
import PersonalProjects from "./components/pages/PersonalProjects";
import PPP from "./components/pages/PPP";
import {Theme} from "./theme";

function App() {
  return (
      <BrowserRouter>
        <div id="App" className={`w-full min-h-screen ${Theme.bgColor}`}>

            <Menu/>
            <div className={"mt-[104px]"}></div>
            <Switch>
                <Route exact path={"/"} component={() => <Home/>}/>
                <Route path={"/leadership"} component={() => <LeadershipManagement/>} />
                <Route path={"/spanish"} component={() => <Spanish/>} />
                <Route path={"/mobility"} component={() => <Mobility/>} />
                <Route path={"/civicengagement"} component={() => <CivicEngagement/>} />
                <Route path={"/personalprojects"} component={() => <PersonalProjects/>} />
                <Route path={"/ppp"} component={() => <PPP/>} />
                <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
            </Switch>

            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
