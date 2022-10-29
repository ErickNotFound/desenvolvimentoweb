import { useState } from "react";

const Idade = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("")

  const verificar = () => {
    if (idade < 18) {
        setMensagem(`Olá ${nome}, vc não é um JOJO`)
    } else if (idade >= 1) {
        setMensagem(`Dale ${nome}, vc é um JOJO`)
    } 
  };



  return (
    <>
      <h1>Cadastro</h1>
        <h2>{mensagem}</h2>
      <input
        type="text"
        placeholder="Insira o seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /><br />
      <input
        type="number"
        placeholder="Insira a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <div style={{ marginTop: 20 }}>
        <button onClick={verificar}>Verificar</button>
      </div>
    </>
  );
};

export default Idade;
