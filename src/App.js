import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import './App.css';

import Home from './composants/Home';
import Spanish from "./composants/Spanish";
import Menu from './composants/Menu';
import LeadershipManagement from "./composants/LeadershipManagement";
import CivicEngagement from "./composants/CivicEngagement";
import PersonalProjects from "./composants/PersonalProjects";
import PPP from "./composants/PPP";

function App() {
  return (
      <body>
      <HashRouter forceRefresh={"true"}>
        <div className="App">

            { /*
            <h3 className={"m-3 d-flex justify-content-center"}>E-portfolio Corentin Dominguez</h3>

            <h5 className={"m-3 d-flex justify-content-center"}>Engineering Student</h5>
            */}

            <Menu/>

            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/leadership"} component={LeadershipManagement} />
                <Route path={"/spanish"} component={Spanish} />
                <Route path={"/civicengagement"} component={CivicEngagement} />
                <Route path={"/personalprojects"} component={PersonalProjects} />
                <Route path={"/ppp"} component={PPP} />
                <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
            </Switch>
        </div>
      </HashRouter>
      </body>
  );
}

export default App;
