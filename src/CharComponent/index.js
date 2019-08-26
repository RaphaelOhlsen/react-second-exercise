import React from 'react';
import './styles.css';

const CharComponent = (props) => {
  return <p className="char" onClick={props.onClick}>{props.character}</p>
}

export default CharComponent;