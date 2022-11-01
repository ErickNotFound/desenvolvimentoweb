import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Contato } from "./pages/Contato";
import { ContatoDetalhes } from "./pages/ContatoDetalhes";
import { Galeria } from "./pages/Galeria";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contato />} />
      <Route path="/contatos/:id" element={<ContatoDetalhes />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App;
