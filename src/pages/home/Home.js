import './Home.css';
import {useNavigate} from 'react-router-dom'
import Filme from '../../common/filme/Filme'
import { useState } from "react";

function Home({filmes}) {
  const navigate = useNavigate()
  const [filmeSelecionado, setFilmeSelecionado] = useState();

  function HandleClick(idFilme){
    setFilmeSelecionado(idFilme)
    navigate('/criticas');
  }
  
  return (
    <div className="Home">
      <div className='main'>
        {filmes.map((filme) => (
          <div>
            <Filme
              titulo={filme.titulo}
              imagem={filme.imagem}
              descricao={filme.descricao}
              nota={filme.nota}
            />

            <button onClick={()=>HandleClick(filme.id)}>Ir para criticas</button>  
          </div>
        ))}
      </div>
      <div>
        <button onClick={()=>navigate('/criticas')}>Ir para criticas</button>
      </div>
    </div>
  );
}

export default Home;
