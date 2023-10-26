import './Criticas.css';
import {useNavigate} from 'react-router-dom'

function Criticas({criticas, idFilme}) {
  const navigate = useNavigate()

  const criticasFiltradas = criticas.filter((critica) => critica.id_filme === idFilme);

  return (
    <div className="main">
    <div className="Criticas">
      {criticasFiltradas.map((critica) => (
          <div>
            <div>
              <img src={critica.perfil}/>
            </div>
            <div>
              <h3>{critica.nome}</h3>
              <p>{critica.critica}</p>
              <p>{critica.nota}</p>
            </div>
          </div>
      ))}
      <button class = "Button" onClick={()=>navigate('/')}> + Filmes</button>
    </div>
    </div>
  );
}

export default Criticas;
