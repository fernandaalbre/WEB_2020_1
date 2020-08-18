import React from 'react';

const Hero = (props) => {
    return <h3> Meu nome é: {props.name} da arena {props.teste}, e sou assim: 
    <img src="/harley-quinn-robbie.jpeg" style={{position: 'left' }}/> </h3>

}

export {Hero}