import "./Home.css";
import { useNavigate } from "react-router-dom";
import Filme from "../../common/filme/Filme";
import { useState } from "react";

function Home({ filmes, selecionarFilme }) {
  const navigate = useNavigate();
  const [genero, setGenero] = useState("todos");
  const [filmesFiltrados, setFilmesFiltrados] = useState(filmes);

  function HandleClick(idFilme) {
    selecionarFilme(idFilme);
    navigate("/criticas");
  }

  function handleSelecionaFiltro(event) {
    setGenero(event.target.value);
    if (event.target.value == "todos") {
      setFilmesFiltrados(filmes);
    } else {
      setFilmesFiltrados(
        filmes.filter((filme) => filme.genero === event.target.value)
      );
    }
  }

  return (
    <div className="Home">
      <select onChange={handleSelecionaFiltro}>
        <option value="todos">todos</option>
        <option value="acao">acao</option>
        <option value="drama">drama</option>
        <option value="romance">romance</option>
      </select>

      <div className="main">
        {filmesFiltrados.map((filme) => (
          <div>
            <Filme
              titulo={filme.titulo}
              imagem={filme.imagem}
              descricao={filme.descricao}
              nota={filme.nota}
            />

            <button onClick={() => HandleClick(filme.id)}>
              Ir para criticas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
