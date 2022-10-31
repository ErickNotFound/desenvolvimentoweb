import { Link } from "react-router-dom";

export const Contato = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/galeria"}>Galeria</Link>
      <br />
      <h1>Componentes Contato</h1>
    </>
  );
};
