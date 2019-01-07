import React from 'react';
import ImagesBackground from '../../../assets/images/background/body-desktop.png';

const Background = (props) =>  (
    <img src={ImagesBackground} className={[props.classBG]}  alt="background" />
)

export default Background;
