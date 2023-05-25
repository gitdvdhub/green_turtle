import './App.css';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <h1>Teste</h1>
      {/* <Frase />
      <SayMyName nome="Matheus" />
      <HelloWorld /> */}
      <Pessoa 
        nome="Pedro Henrique "
        idade="15, em breve 16"
        profissao="Gostosão pegador de mulher"
        foto="https://via.placeholder.com/150"
        namorada="Julia"
        />
    </div>
  );
}

export default App;