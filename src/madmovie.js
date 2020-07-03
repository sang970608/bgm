import React from 'react';
import Frame from './frame.js';
import './madmovie.css';


const madmovieBgm = [{
    name : "I feel crazy",
    id : "https://www.youtube.com/embed/D0Tqkrnmwc8?autohide=1&color=white&fs=0&loop=1&playlist=D0Tqkrnmwc8&rel=0&theme=light",
    index : 1
  },{
    name: "About You",
    id : "https://www.youtube.com/embed/bXHfrdi_fsU?autohide=1&color=white&fs=0&loop=1&playlist=bXHfrdi_fsU&rel=0&theme=light",
    index : 2
  },{
    name: "Without You",
    id : "https://www.youtube.com/embed/aRWKi18SuHk?autohide=1&color=white&fs=0&loop=1&playlist=aRWKi18SuHk&rel=0&theme=light",
    index : 3
  },{
    name: "Crazy",
    id : "https://www.youtube.com/embed/xgcLwtGlgLU?autohide=1&color=white&fs=0&loop=1&playlist=xgcLwtGlgLU&rel=0&theme=light",
    index : 4
  },{
    name : "Gravity",
    id : "https://www.youtube.com/embed/WWtpK0hwVdk?autohide=1&color=white&fs=0&loop=1&playlist=WWtpK0hwVdk&rel=0&theme=light",
    index : 5
  },{
    name : "No Stopping Love",
    id : "https://www.youtube.com/embed/xFoGtSiqins?autohide=1&color=white&fs=0&loop=1&playlist=xFoGtSiqins&rel=0&theme=light",
    index : 6
  },{
    name : "Let Your Heartbreak",
    id : "https://www.youtube.com/embed/fCODoi9feMo?autohide=1&color=white&fs=0&loop=1&playlist=fCODoi9feMo&rel=0&theme=light",
    index : 7
  },{
    name : "Wildfire",
    id : "https://www.youtube.com/embed/Cc7rjhSTO88?autohide=1&color=white&fs=0&loop=1&playlist=Cc7rjhSTO88&rel=0&theme=light",
    index : 8
  },{
    name : "Speed",
    id : "https://www.youtube.com/embed/lP6mK2-nLIk?autohide=1&color=white&fs=0&loop=1&playlist=lP6mK2-nLIk&rel=0&theme=light",
    index : 9
  },{
    name : "Moonlight",
    id : "https://www.youtube.com/embed/MvTYrjX4ve4?autohide=1&color=white&fs=0&loop=1&playlist=MvTYrjX4ve4&rel=0&theme=light",
    index : 10
  },{
    name : "Earth",
    id : "https://www.youtube.com/embed/dOo2jWb73JY?autohide=1&color=white&fs=0&loop=1&playlist=dOo2jWb73JY&rel=0&theme=light",
    index : 11
  },{
    name : "About Me",
    id : "https://www.youtube.com/embed/t2Ti8d992RM?autohide=1&color=white&fs=0&loop=1&playlist=t2Ti8d992RM&rel=0&theme=light",
    index : 12
  }]

class Madmovie extends React.Component {
  state={
    isLoading : false
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div className="madmovie">
      {isLoading? "로딩중입니다, 잠시만 기다려주세요!" :(
        <div>
          <h1>매드무비 브금</h1>
          <div className="madmovieBgm">
            {madmovieBgm.map(mad => (<Frame //mad부분을 같게 입력할 시 첫번째 props인 name만 값이 바귀지 않게된다.
            name={mad.name}
            poster={mad.image}
            id={mad.id}
            key={mad.index}
            />))}
          </div>
         </div>)}
      </div>
    )
  }
}

export default Madmovie;