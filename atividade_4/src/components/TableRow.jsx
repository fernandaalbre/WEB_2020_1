import React, { Component } from "react";
import axios from "axios";

export default class TableROw extends Component {

  constructor(props){
    super(props)
    this.apagar = this.apagar.bind(this)
   }

  montarTabela(){
    if(!this.state.disciplinas) return
      return this.state.disciplinas.map(
          (disciplinas, i)=>{
            return <TableROw disciplinas={disciplinas} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
          }
       )
   }
  
  apagar(){
    axios.delete("http://localhost:3001/disciplinas/"+this.props.disciplinas.id)
    .then(
      (res)=>{
        console.log("Registro apagado")
        this.props.apagarElementoPorId(this.props.disciplinas.id)
      }
    )
    .catch((error)=>console.log(error))
   }

  render() {
    return (
        <tr>
          
          <td>{this.props.disciplinas.id}</td>

          <td>{this.props.disciplinas.nome}</td>

          <td>{this.props.disciplinas.curso}</td>

          <td>{this.props.disciplinas.capacidade}</td>

          <td style={{ textAlign: "center" }}>
            <button className="btn btn-primary">Editar</button>
           </td>

          <td style={{ textAlign: "center" }}>
            <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
           </td>
         </tr>
     );
   }
 }
