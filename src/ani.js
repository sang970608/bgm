import React from 'react';
import Frame from './frame.js';
import './lotto.css';


const aniBgm = [{
    name : "Butterfly",
    id : "https://www.youtube.com/embed/1cMKPc3Yors?autohide=1&color=white&fs=0&loop=1&playlist=1cMKPc3Yors&rel=0&theme=light",
    index : 1
  },{
    name: "Power Up",
    id : "https://www.youtube.com/embed/um8Qwhzh2yE?autohide=1&color=white&fs=0&loop=1&playlist=um8Qwhzh2yE&rel=0&theme=light",
    index : 2
  },{
    name: "질풍가도",
    id : "https://www.youtube.com/embed/Iz_lJA2iH7s?autohide=1&color=white&fs=0&loop=1&playlist=Iz_lJA2iH7s&rel=0&theme=light",
    index : 3
  },{
    name: "나의 마음을 담아",
    id : "https://www.youtube.com/embed/TxOK-xYyYrs?autohide=1&color=white&fs=0&loop=1&playlist=TxOK-xYyYrs&rel=0&theme=light",
    index : 4
  },{
    name : "New Future",
    id : "https://www.youtube.com/embed/h_9FTArJ80A?autohide=1&color=white&fs=0&loop=1&playlist=h_9FTArJ80A&rel=0&theme=light",
    index : 5
  },{
    name : "스포트라이트",
    id : "https://www.youtube.com/embed/WMX8oEwOuKg?autohide=1&color=white&fs=0&loop=1&playlist=WMX8oEwOuKg&rel=0&theme=light",
    index : 6
  },{
    name : "우리의 꿈",
    id : "https://www.youtube.com/embed/gderxyAQ8XQ?autohide=1&color=white&fs=0&loop=1&playlist=gderxyAQ8XQ&rel=0&theme=light",
    index : 7
  },{
    name : "질주",
    id : "https://www.youtube.com/embed/XT_inuStmBs?autohide=1&color=white&fs=0&loop=1&playlist=XT_inuStmBs&rel=0&theme=light",
    index : 8
  },{
    name : "Hello Mr. My Yesterday",
    id : "https://www.youtube.com/embed/yyzYr21MumM?autohide=1&color=white&fs=0&loop=1&playlist=yyzYr21MumM&rel=0&theme=light",
    index : 9
  },{
    name : "Love Is Thrill, Shock, Suspense",
    id : "https://www.youtube.com/embed/F4juHV5PnKg?autohide=1&color=white&fs=0&loop=1&playlist=F4juHV5PnKg&rel=0&theme=light",
    index : 10
  },{
    name : "Samurai Heart",
    id : "https://www.youtube.com/embed/Wt4rqoiVzcU?autohide=1&color=white&fs=0&loop=1&playlist=Wt4rqoiVzcU&rel=0&theme=light",
    index : 11
  },{
    name : "홍련화",
    id : "https://www.youtube.com/embed/ymwQI1UckUY?autohide=1&color=white&fs=0&loop=1&playlist=ymwQI1UckUY&rel=0&theme=light",
    index : 12
  }]

class ani extends React.Component {
  state={
    isLoading : false
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div className="lotto">
      {isLoading? "로딩중입니다, 잠시만 기다려주세요!" :( //로딩페이지를 설정했다.
        <div>
          <h1>가챠 브금</h1>
          <div className="lottoBgm">
            {aniBgm.map(anis => (<Frame //map을 이용하여 JSON정보를 쉽게 꺼낸다.
            name={anis.name}
            poster={anis.image}
            id={anis.id}
            key={anis.index}
            />))}
          </div>
         </div>)}
      </div>
    )
  }
}

export default ani;