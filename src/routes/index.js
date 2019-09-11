import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "../views/home";
import MovieDetail from "../views/movie";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;

const Root = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </>
  );
};

export default Root;
