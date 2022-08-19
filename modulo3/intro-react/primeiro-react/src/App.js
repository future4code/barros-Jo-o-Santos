import logo from './minhafoto.jpeg';
import './App.css';
function mensagem(){
  alert(" Boa noite Labenu!")
}
function App() {
  return (
  
    <div className="App">
      <h1>Eu me chamo João Pedro Ferreira</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-ferreira-490818144/"
          target="_blank"
          rel="noopener noreferrer"
        >
         linkedin
        </a>
        <button onClick={mensagem}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;
