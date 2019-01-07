import React from 'react';

const Button = (props) =>  (
    <button onClick={props.clicked} className={props.classButton} >{props.children}</button>
)

export default Button;
