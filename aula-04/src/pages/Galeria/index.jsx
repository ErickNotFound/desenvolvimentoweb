import { Link } from "react-router-dom";

export const Galeria = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/contatos"}>Contatos</Link>
      <br />
    </>
  );
};
