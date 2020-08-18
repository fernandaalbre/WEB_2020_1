import React from 'react';

const Emeny = (props) => {
    return <h3> Meu nome é: {props.name} da arena {props.teste}, e sou assim: {props.imagem}
    <img src="/mulherMaravillha.jpeg" style={{position: 'right' }}/></h3>
}

export {Emeny}
