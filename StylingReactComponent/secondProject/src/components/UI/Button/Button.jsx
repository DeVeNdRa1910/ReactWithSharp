import React from 'react';

import './Button.css';

const Button = props => {
  const isValid = props.validity
  return (
    <div  className={`btn ${!isValid ? 'invalid' : ''}`} >
      <button type={props.type}  onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
