import React from 'react';
import PropTypes from 'prop-types';

function Frame({name, id}) { //props를 {}로 안감싸면 Uncaught Invariant Violation에러가 생김
return(
  <div className="frameWrap">
    <h3>{name}</h3>
    <iframe title={name} width="400" height="300" src={id} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)
}

Frame.propTypes = { //파일 형식 지정
name : PropTypes.string.isRequired,
id : PropTypes.string.isRequired,
index : PropTypes.number.isRequired  
}

export default Frame;