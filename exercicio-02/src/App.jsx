import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState();
  const [quantidade, setQuantidade] = useState(0);
  const [quantidadeMl, setQuantidadeMl] = useState(0);
  const [meta, setMeta] = useState();
  const [meta2, setMeta2] = useState();
  const [mensagem, setMensagem] = useState();

  const clique = () => {
    if (quantidadeMl > 0) {
      setContador(contador + 1);
      calcular();
      baterMeta();
      setMeta(meta2);
    } else {
      alert("Valor inválido");
    }
  };

  const clique2 = () => {
    if (meta2 > 0) {
      setMeta(meta2);
    } else {
      alert("Valor inválido");
    }
  };

  const baterMeta = () => {
    if (meta >= quantidade) {
      setMensagem(`Você bateu a meta de ${quantidade}`)
    }
  }

  const calcular = () => {
    setQuantidade(quantidade + quantidadeMl * 1);
  };

  const reset = () => {
    setContador();
    setQuantidade(0);
    setMensagem("")
    setMeta()
  };

  return (
    <>
      <h1>{mensagem}</h1>
      <h1>Meta do dia: {meta}</h1>
      <input type="number" onChange={(e) => setMeta2(e.target.value)} />
      <button onClick={clique2}>Definir meta</button>
      <h1>Copos de água: {contador}</h1>
      <h2>Você bebeu {quantidade}ml</h2>
      <div className="sss">
        <h1>Quantos ml tem o copo?</h1>
      </div>
      <div className="sla">
        <input
          type="number"
          onChange={(e) => setQuantidadeMl(e.target.value)}
        />
        <button onClick={clique}>Adicionar um copo</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
