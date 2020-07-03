import React from 'react';
import Frame from './frame.js';
import './lotto.css';


const lottoBgm = [{
    name : "Melodie",
    id : "https://www.youtube.com/embed/emoadwiK4TM?autohide=1&color=white&fs=0&loop=1&playlist=emoadwiK4TM&rel=0&theme=light",
    index : 1
  },{
    name: "Sunset Strip",
    id : "https://www.youtube.com/embed/e-WZT6xEU2o?autohide=1&color=white&fs=0&loop=1&playlist=e-WZT6xEU2o&rel=0&theme=light",
    index : 2
  },{
    name: "Bangarang",
    id : "https://www.youtube.com/embed/YJVmu6yttiw?autohide=1&color=white&fs=0&loop=1&playlist=YJVmu6yttiw&rel=0&theme=light",
    index : 3
  },{
    name: "Molossus",
    id : "https://www.youtube.com/embed/B2s8qh53fXc?autohide=1&color=white&fs=0&loop=1&playlist=B2s8qh53fXc&rel=0&theme=light",
    index : 4
  },{
    name : "Extreme Ways",
    id : "https://www.youtube.com/embed/ftm1hiXgYsA?autohide=1&color=white&fs=0&loop=1&playlist=ftm1hiXgYsA&rel=0&theme=light",
    index : 5
  },{
    name : "Ruffneck",
    id : "https://www.youtube.com/embed/_t2TzJOyops?autohide=1&color=white&fs=0&loop=1&playlist=_t2TzJOyops&rel=0&theme=light",
    index : 6
  },{
    name : "Supremacy",
    id : "https://www.youtube.com/embed/avM_UsVo0IA?autohide=1&color=white&fs=0&loop=1&playlist=avM_UsVo0IA&rel=0&theme=light",
    index : 7
  },{
    name : "Speed",
    id : "https://www.youtube.com/embed/lP6mK2-nLIk?autohide=1&color=white&fs=0&loop=1&playlist=lP6mK2-nLIk&rel=0&theme=light",
    index : 8
  },{
    name : "Centuries",
    id : "https://www.youtube.com/embed/LBr7kECsjcQ?autohide=1&color=white&fs=0&loop=1&playlist=LBr7kECsjcQ&rel=0&theme=light",
    index : 9
  },{
    name : "Kings Never Die",
    id : "https://www.youtube.com/embed/XBJ9rm99Pno?autohide=1&color=white&fs=0&loop=1&playlist=XBJ9rm99Pno&rel=0&theme=light",
    index : 10
  },{
    name : "Lengends Never Die",
    id : "https://www.youtube.com/embed/r6zIGXun57U?autohide=1&color=white&fs=0&loop=1&playlist=r6zIGXun57U&rel=0&theme=light",
    index : 11
  },{
    name : "Rise",
    id : "https://www.youtube.com/embed/fB8TyLTD7EE?autohide=1&color=white&fs=0&loop=1&playlist=fB8TyLTD7EE&rel=0&theme=light",
    index : 12
  }]

class Lotto extends React.Component {
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
            {lottoBgm.map(bgm => (<Frame //map을 이용하여 JSON정보를 쉽게 꺼낸다.
            name={bgm.name}
            poster={bgm.image}
            id={bgm.id}
            key={bgm.index}
            />))}
          </div>
         </div>)}
      </div>
    )
  }
}

export default Lotto;