import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [quantidadeMl, setQuantidadeMl] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [meta, setMeta] = useState(0);
  const [resgistro, setResgistro] = useState(null);
  const date = new Date().toLocaleString();

  const clique = () => {
    if (quantidadeMl > 0 && meta > 0) {
      setContador(contador + 1);
      calcular();
      setResgistro(date);
      metaMensagem();
    } else {
      alert("Valores inválido");
    }
  };

  const metaMensagem = () => {
    if ((quantidade + parseFloat(quantidadeMl)) >= meta) {
      return setMensagem("Você bateu a meta");
    }
  };

  const calcular = () => {
    setQuantidade(quantidade + parseFloat(quantidadeMl));
  };

  const reset = () => {
    setContador(0);
    setQuantidade(0);
    setQuantidadeMl(0);
    setMensagem(null);
    setResgistro(null);
    setMeta(0);
  };

  return (
    <>
      <h2>Sua meta é: {meta}</h2>
      <h2>{mensagem}</h2>
      <input
        type="number"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
      />
      <h2>Copos de água: {contador}</h2>
      <h2>Você bebeu {quantidade}ml</h2>
      <h2>Quantos ml tem o copo?</h2>
      <div className="sla">
        <input
          type="number"
          value={quantidadeMl}
          onChange={(e) => setQuantidadeMl(e.target.value)}
        />
        <br /><br />
        <button onClick={clique}>Adicionar um copo</button>
        <br /><br />
        <button onClick={reset}>Reset</button>
      </div>
      <p>Ultimo copo bebido:</p>
      <p>{resgistro}</p>
    </>
  );
}

export default App;
