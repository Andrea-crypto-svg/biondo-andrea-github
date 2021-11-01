import logo from './logo.svg';
import './App.css';

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
      <div className="precedente">
        precedente
      </div>
      <div className="pagina">
        pagina
      </div>
      <div className="successivo">
        successivo       
      </div>
      </div>
    </div>
  );
}

export default App;
