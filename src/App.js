import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 소개</Link>
        </li>
        <li>
          <Link to="/profile/pgy93">pgy93 소개</Link>
        </li>
        <hr />
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:userName" component={Profile} />
    </div>
  );
}

export default App;
