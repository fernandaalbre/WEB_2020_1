import React, { Component } from "react";
import axios from "axios";
import TableROw from "./TableRow";

export default class List extends Component {

  constructor(props) {
    super(props);
    this.setState = { disciplinas: [] };

    this.apagarElemntoPorId = this.apagarElemntoPorId.bind(this)
   }

  componentDidMount() {
    axios
      .get("http://localhost:3001/disciplinas")
      .then((res) => {
        this.setState({ disciplinas: res.data });
       })
      .catch((error) => {
        console.log(error);
       });
   }

  montarTabela(){
    if(!this.state.disciplinas) return
     return this.state.disciplinas.map(
       (disciplinas, i)=>{
         return <TableROw disciplinas={disciplinas} key={i} />;
       }
     )
   }

  apagarElemntoPorId(id){
      let disciplinasTemp = this.state.disciplinasTemp
      for(let i=0; i<disciplinasTemp.length;i++){
        if(disciplinasTemp[i].id===id){
          disciplinasTemp.splice(i,1)
        }
      }
      this.setState({disciplinas:disciplinasTemp})
   }

  render() {
    return (
      <div>
        <p> Listar Disciplinas! </p>
        <table className="table table-striped" style={{marginTop:20}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Capacidade</th>
              <th colSpan="2" style={{textAlign:"center"}} >Ação</th>
            </tr>
           </thead>
          <tbody>
            {this.montarTabela()}
           </tbody>
         </table>
       </div>
     );
   }
 }
