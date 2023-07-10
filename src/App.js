import "./App.css";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Edson" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Edson"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}
export default App;
