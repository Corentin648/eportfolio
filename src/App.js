import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Footer from "./components/pages/Footer";

import Home from './components/pages/Home';
import Spanish from "./components/pages/Spanish";
import Menu from './components/pages/Menu';
import LeadershipManagement from "./components/pages/leadership-management/LeadershipManagement";
import CivicEngagement from "./components/pages/leadership-management/CivicEngagement";
import PersonalProjects from "./components/pages/PersonalProjects";
import PPP from "./components/pages/PPP";

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

            <Footer/>
        </div>
      </HashRouter>
      </body>
  );
}

export default App;
