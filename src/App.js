import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import Home from './composants/Home';
import Spanish from "./composants/Spanish";
import Menu from './composants/Menu';
import LeadershipManagement from "./composants/LeadershipManagement";
import CivicEngagement from "./composants/CivicEngagement";

function App() {
  return (
      <BrowserRouter>
        <div className="App">

            <h3 className={"m-3 d-flex justify-content-center"}>E-portfolio Corentin Dominguez</h3>

            <h5 className={"m-3 d-flex justify-content-center"}>Engineering Student</h5>

            <Menu/>

            <Switch>
                <Route path={"/"} component={Home} exact />
                <Route path={"/spanish"} component={Spanish} />
                <Route path={"/leadership"} component={LeadershipManagement} />
                <Route path={"/civicengagement"} component={CivicEngagement} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
