function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisa boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p> Não a itens na lista</p>
      )}
    </>
  );
}
export default OutraLista;
