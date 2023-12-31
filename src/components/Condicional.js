import { useState } from "react";
function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUSerEmail] = useState();
  function enviarEmail(e) {
    e.preventDefault();
    setUSerEmail(email);
  }
  function limparEvento(e) {
    e.preventDefault();
    setUSerEmail('');
  }
  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={enviarEmail}>Enviar e-mail</button>
        {userEmail && (
            <div>
                <p>O e-mail do usuário é: {userEmail}</p>
                <button onClick={limparEvento}>Limpar e-mail</button>
            </div>
        )}
      </form>
    </div>
  );
}
export default Condicional;
