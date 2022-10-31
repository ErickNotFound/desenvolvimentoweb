import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to={"/contatos"}>Contatos</Link>
      <br />
      <Link to={"/galeria"}>Galeria</Link>
    </>
  );
};

export default Home;
