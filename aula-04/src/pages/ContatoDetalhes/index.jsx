import { useParams } from "react-router-dom";

export const ContatoDetalhes = () => {
  const { id } = useParams();

  const renderizaNome = () => {
    switch (id) {
      case "1":
        return "Erick";
      case "2":
        return "Giorno Giovanna";
      case "3":
        return "Kazuha";
      default:
        return "Desconhecido";
    }
  };

  if (id == "1") {
    return <h1>Erick que veio do if</h1>;
  }

  return (
    <h1>
      {id == "2" && "Contato: Giornno que veio do &&"}
      {/* Contato: {renderizaNome()} */}
      {id == 3 ? "Kazuha do Operador ternário" : null}
    </h1>
  );

  return <h1>Contato: {renderizaNome()}</h1>;
};
