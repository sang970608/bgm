import React from 'react';
import Frame from './frame.js';
import './popsong.css';


const popBgm = [{
    name : "하루하루",
    id : "https://www.youtube.com/embed/8OAQ6RuYFGE?autohide=1&color=white&fs=0&loop=1&playlist=8OAQ6RuYFGE&rel=0&theme=light",
    index : 1
  },{
    name: "붉은 노을",
    id : "https://www.youtube.com/embed/oJIWY9W5WAM?autohide=1&color=white&fs=0&loop=1&playlist=oJIWY9W5WAM&rel=0&theme=light",
    index : 2
  },{
    name: "거짓말",
    id : "https://www.youtube.com/embed/2Cv3phvP8Ro?autohide=1&color=white&fs=0&loop=1&playlist=2Cv3phvP8Ro&rel=0&theme=light",
    index : 3
  },{
    name: "좋은 날",
    id : "https://www.youtube.com/embed/rZHC1zMiWiU?autohide=1&color=white&fs=0&loop=1&playlist=rZHC1zMiWiU&rel=0&theme=light",
    index : 4
  },{
    name : "가슴이 뛴다",
    id : "https://www.youtube.com/embed/KFSzMegd7hs?autohide=1&color=white&fs=0&loop=1&playlist=KFSzMegd7hs&rel=0&theme=light",
    index : 5
  },{
    name : "Gee",
    id : "https://www.youtube.com/embed/U7mPqycQ0tQ?autohide=1&color=white&fs=0&loop=1&playlist=U7mPqycQ0tQ&rel=0&theme=light",
    index : 6
  },{
    name : "소원을 말해봐",
    id : "https://www.youtube.com/embed/6SwiSpudKWI?autohide=1&color=white&fs=0&loop=1&playlist=6SwiSpudKWI&rel=0&theme=light",
    index : 7
  },{
    name : "잔소리",
    id : "https://www.youtube.com/embed/SBxhgQjZlFk?autohide=1&color=white&fs=0&loop=1&playlist=SBxhgQjZlFk&rel=0&theme=light",
    index : 8
  },{
    name : "너랑 나",
    id : "https://www.youtube.com/embed/rsvKskQcFD4?autohide=1&color=white&fs=0&loop=1&playlist=rsvKskQcFD4&rel=0&theme=light",
    index : 9
  },{
    name : "벚꽃 엔딩",
    id : "https://www.youtube.com/embed/MzF5bWjKjjI?autohide=1&color=white&fs=0&loop=1&playlist=MzF5bWjKjjI&rel=0&theme=light",
    index : 10
  },{
    name : "강남 스타일",
    id : "https://www.youtube.com/embed/9bZkp7q19f0?autohide=1&color=white&fs=0&loop=1&playlist=9bZkp7q19f0&rel=0&theme=light",
    index : 11
  },{
    name : "썸",
    id : "https://www.youtube.com/embed/p_1ypvwxiSw?autohide=1&color=white&fs=0&loop=1&playlist=p_1ypvwxiSw&rel=0&theme=light",
    index : 12
  }]

class popsong extends React.Component {
  state={
    isLoading : false
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div className="pop">
      {isLoading? "로딩중입니다, 잠시만 기다려주세요!" :( //로딩페이지를 설정했다.
        <div>
          <h1>가챠 브금</h1>
          <div className="popBgm">
            {popBgm.map(pops => (<Frame //map을 이용하여 JSON정보를 쉽게 꺼낸다.
            name={pops.name}
            poster={pops.image}
            id={pops.id}
            key={pops.index}
            />))}
          </div>
         </div>)}
      </div>
    )
  }
}

export default popsong;