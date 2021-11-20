import React from "react";
import './styles/global.scss'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Characters from "./pages/Characters";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Characters} />
    </Switch>
    <Redirect to="/personagens" />
  </BrowserRouter>
);

export default App;
