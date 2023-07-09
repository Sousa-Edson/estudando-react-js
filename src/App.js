import './App.css';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';

function App() {
  const nome = "Maria"
  return (
    <div className='App'>
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Edson" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Edson" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />


    </div>

  );
}
export default App;
