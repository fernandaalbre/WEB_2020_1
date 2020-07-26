import React, {component} from 'react'


class questao2 extends React.Component{
    render(){
        return(
            <div> 
                <ul> 
                   <li> Olá, sou a {this.props.nome} </li> 
                   <li> curso {this.props.curso} </li>
                   <li> e sou de {this.props.cidade} </li>
                </ul>
            </div>
          
        )
    }
}

export default questao2