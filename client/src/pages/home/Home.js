import "./Home.css";
import { useNavigate } from "react-router-dom";
import Filme from "../../filme/Filme";
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
    <div className="main">
    <div className="select-container">
      <select class="custom-select"onChange={handleSelecionaFiltro}>
        <option value="todos">Menu</option>
        <option value="acao">Ação</option>
        <option value="drama">Drama</option>
        <option value="romance">Romance</option>
      </select> 

      
        {filmesFiltrados.map((filme) => (
          <div>
            <Filme 
              titulo={filme.titulo}
              imagem={filme.imagem} 
              descricao={filme.descricao}
              nota={filme.nota}
            />
            <div >
            <button class = "Button"  onClick={() => HandleClick(filme.id)}>
              Ver Críticas
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;