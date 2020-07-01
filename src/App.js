import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';

function Strength() {

  const strength_bgm = [{
    name : "I feel crazy",
    link : "https://youtu.be/D0Tqkrnmwc8",
    poster : "/I feel crazy.jsp"
  }]

  return(
    <div>
      <h1>강화브금</h1>
      <img src="I feel crazy.jpg" alt="crazy"/>
    </div>
  )
}

function Madmovie() {
  return(
    <div>
      <h1>매드무비</h1>
    </div>
  )
}

function Comfort() {
  return(
    <div>
      <h1>편안</h1>
    </div>
  )
}

function Ani() {
  return(
    <div>
      <h1>애니메이션</h1>
    </div>
  )
}

function Feedback() {
  return(
    <div>
      <h1>피드백</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <head>
        <title>브금 선택</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
        <body>
          <nav>
            <label class="logo">BGM On</label>
            <ul>
              <li><NavLink to ="/strength" className="menu">강화bgm</NavLink></li>
              <li><NavLink to ="/madmovie" className="menu">매드무비bgm</NavLink></li>
              <li><NavLink to ="/comfort" className="menu">편안한bgm</NavLink></li>
              <li><NavLink to ="/ani" className="menu">애니bgm</NavLink></li>
              <li><NavLink to ="/feedback" className="menu">피드백</NavLink></li>
            </ul>
          </nav>
              <Switch>
                <Route path="/strength"><Strength /></Route>
                <Route path="/madmovie"><Madmovie /></Route>
                <Route path="/comfort"><Comfort /></Route>
                <Route path="/ani"><Ani /></Route>
                <Route path="/feedback"><Feedback /></Route>
              </Switch>
        </body>
    </div>
  );
}

export default App;
