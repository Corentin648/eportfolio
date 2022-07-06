import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import './App.css';

import Home from './composants/pages/Home';
import Spanish from "./composants/pages/Spanish";
import Menu from './composants/pages/Menu';
import LeadershipManagement from "./composants/pages/leadership-management/LeadershipManagement";
import CivicEngagement from "./composants/pages/leadership-management/CivicEngagement";
import PersonalProjects from "./composants/pages/PersonalProjects";
import PPP from "./composants/pages/PPP";

function App() {
  return (
      <body>
      <HashRouter forceRefresh={"true"}>
        <div className="App">

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
