import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Lotto from './lotto.js';
import Madmovie from './madmovie.js';
import Popsong from './popsong.js';
import Ani from './ani.js';
import Home from './home.js';

function Feedback() {
  return(
    <div>
      <h1>피드백</h1>
      <h3 className="feed">고쳐지거나 추가되길 원하는 부분이 있으면
      라이언을 눌러서 메일을 보내주세요~!</h3>
      <a href="mailto:sang970608@naver.com">
        <img src="https://lh3.googleusercontent.com/proxy/F2Y9EKKeXoS8pR92j4-Sri10I94CY-kJbV9uae3M89OxdPfhJyUq3iqzR7rkJEgFM06zmE53BD7TWM0wPBerfRkhsuuxGi_tpi6Y_5jUr4yVbBgsze5Ehk-gJfJ-FjqoW6RaNpvWs4wSInl83Hn37k50DtnayH6KmFa7iQ" alt="이메일 링크" />
      </a>
    </div>
  )
}

function Error(){
  return(
    <div className="error">
      <h1>잘못된 접근입니다.</h1>
    </div>
  )
}

class App extends React.Component {
  state = {
    isLoading : true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading:false});
    },3000)
  };

  render(){
    const { isLoading } = this.state;
    return (
      <div className="App">
        <head>
          <title>브금 선택</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        {isLoading ? <div>
        <img src="https://lh3.googleusercontent.com/proxy/F2Y9EKKeXoS8pR92j4-Sri10I94CY-kJbV9uae3M89OxdPfhJyUq3iqzR7rkJEgFM06zmE53BD7TWM0wPBerfRkhsuuxGi_tpi6Y_5jUr4yVbBgsze5Ehk-gJfJ-FjqoW6RaNpvWs4wSInl83Hn37k50DtnayH6KmFa7iQ" alt="로딩중이에요" />
        </div>
         :(
          <body>
            <nav>
              <label class="logo">BGM On</label>
              <ul>
                <li><NavLink exact to ="/" className="menu">Home</NavLink></li>
                <li><NavLink to ="/lotto" className="menu">가챠bgm</NavLink></li>
                <li><NavLink to ="/madmovie" className="menu">매드무비bgm</NavLink></li>
                <li><NavLink to ="/popsong" className="menu">추억의 가요</NavLink></li>
                <li><NavLink to ="/ani" className="menu">애니bgm</NavLink></li>
                <li><NavLink to ="/feedback" className="menu">피드백</NavLink></li>
              </ul>
            </nav>
                <Switch>  
                  <Route exact path="/"><Home /></Route>
                  <Route path="/lotto"><Lotto /></Route>
                  <Route path="/madmovie"><Madmovie /></Route>
                  <Route path="/popsong"><Popsong /></Route>
                  <Route path="/ani"><Ani /></Route>
                  <Route path="/feedback"><Feedback /></Route>
                  <Route path="/"><Error /></Route>
                </Switch>
          </body>
      )}</div>
  )};
}

export default App;
