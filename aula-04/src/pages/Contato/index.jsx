import { Link } from "react-router-dom";

export const Contato = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/galeria"}>Galeria</Link>
      <br />
      <br />
      <>
        <Link to={"/contatos/1"}>Erick</Link><br />
        <Link to={"/contatos/2"}>Giorno Giovanna</Link><br />
        <Link to={"/contatos/3"}>Kujou</Link><br />
      </>
    </>
  );
};
