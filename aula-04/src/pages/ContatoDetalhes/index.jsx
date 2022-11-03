import { useParams } from "react-router-dom";

export const ContatoDetalhes = () => {
  const { id } = useParams();
  const { state } = useLocation();

  console.log(state)


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

   //Renderização condiconal Através do IF
   if(id == '1'){
    return <h1>João que veio do if</h1>
}

return (
    <h1> 
        {/* Renderização Condicional com operador lógico */}
        {id == '2' && "Contato: Amanda que veio do &&"}
        {/* Contato: {renderizaNome()} */}
        {/* Renderização condicional com operador Ternário */}
        {id == 3 ? "Caroline do Operador ternário" : null}
    </h1>
);

};
