import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table"; 
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <div className="navbar">

      

       <div className="logo">
        <font color="white">LOGO</font>
       </div>

       <div className="selectbar">
       
         <a href="/App.js">Visualizza repos</a> - <a href="/App.js">Aggiorna repos</a> - <a href="/App.js">Nuovo utente</a>
       </div>
      
      </div>
      
      <header className="App-header">
      </header>

      <div className="container">
      
      </div>
     
    </div>
  );

  class App extends Component {
    render(){
const data = [{  
  msg: 'Hello',  
  num: 1  
  },{  
  msg: 'Hey',  
  num: 2  
  },{  
  msg: 'Hi',  
  num: 3   
  },{  
  msg: 'Bye',  
  num: 4  
  },{  
  msg: 'Welcome',  
  num: 5  
  },{  
  msg: 'Thanks',  
  num: 6  
  }]  
const columns = [{  
Header: 'Message',  
 accessor: 'msg'  
},{  
Header: 'Number',  
accessor: 'num'  
}]
      return (  
    <div>  
        <ReactTable  
            data={data}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  
        />  
    </div>        
)  
}  
  
}
}
    
 


export default App;
