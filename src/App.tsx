import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/shared/header/Header';
import User from './components/user/User';
import Home from './components/home/Home';
import ErrorPage from './components/shared/error/ErrorPage';
import { Container } from '@material-ui/core';
import Advert from "./components/advert/Advert";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={User} />
          <Route path="/advert/:slug" component={Advert} />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;