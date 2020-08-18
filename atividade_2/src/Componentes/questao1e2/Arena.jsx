import React from 'react';

import {Hero} from './Componentes/questao1e2/Hero';
//import {Emeny} from './Componentes/questao1e2/Emeny';


    export default (props) =>
    <div>
        Arena: {props.arena}
        {
            React.Children.map(
                props.Children, 
                (elemento)=>{
                    React.cloneElement(elemento,{teste:"Luta"})
                }
            )
        }
    </div>

