import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import {Route, Switch, NavLink} from 'react-router-dom';

const strengthBgm = [{
  name : "Tales of the Electric Romeo",
  id : "https://www.youtube.com/embed/88lTopK49C0?autohide=1&color=white&fs=0&loop=1&playlist=88lTopK49C0&rel=0&theme=light",
  index : 1
},{
  name: "power up",
  id : "https://www.youtube.com/embed/VEzyhRki1gY?autohide=1&color=white&fs=0&loop=1&playlist=VEzyhRki1gY&rel=0&theme=light",
  index : 2}]

  function Frame({name, id}) { //props를 {}로 안감싸면 Uncaught Invariant Violation에러가 생김
    return(
      <div className="wrap">
        <h3>{name}</h3>
        <iframe title={name} width="560" height="315" src={id} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
  
  Frame.propTypes = {
    name : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    index : PropTypes.number.isRequired  
  }

function Strength() {
  return(
    <div>
      <h1>강화브금</h1>
      {strengthBgm.map(bgm => (<Frame 
      name={bgm.name}
      poster={bgm.image}
      id={bgm.id}
      key={bgm.index}
       />))}
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
