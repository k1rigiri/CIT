import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./packets/ProfilePage";
import SignInPage from "./packets/SignInPage";
import Layout from "./packets/Layout";
import MainPage from "./packets/MainPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/sign-in" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
