import { Link } from "react-router-dom";

const contato = {
  id: 1,
  nome: "Erick",
  email: 'e@gmail.com'
}

const contato2 = {
  id: 1,
  nome: "Giorno Giovanna",
  email: 'g@gmail.com'
}

const contato3 = {
  id: 1,
  nome: "Kazuha",
  email: 'k@gmail.com'
}


export const Contato = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/galeria"}>Galeria</Link>
      <br />
      <br />
      <>
        <Link to={`/contatos/${contato.id}`} state={{ nome: contato.nome, id: contato.id }}>Erick</Link><br />
        <Link to={`/contatos/${contato2.id}`} state={{ nome: contato.nome, id: contato.id}}>Giorno Giovanna</Link><br />
        <Link to={`/contatos/${contato3.id}`} state={{ cnome: contato.nome, id: contato.id }}>Kazuha</Link><br />
      </>
    </>
  );
};
