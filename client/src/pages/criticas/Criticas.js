import './Criticas.css';
import {useNavigate} from 'react-router-dom'

function Criticas({criticas, idFilme}) {
  const navigate = useNavigate()
  const criticasFiltradas = criticas.filter((critica) => critica.id_filme === idFilme);



  return (
    <div className="main">
    <div className="quadro">
      {criticasFiltradas.map((critica) => (
          <div className="critica-item" key={critica.id}>
            <div>
              <img className="PerfilStyles"  src={critica.perfil} alt={critica.nome} />
            </div>
            <div>
              <h3>{critica.nome}</h3>
              <p>{critica.critica} </p>
              <p >Nota: {critica.nota}</p>
            </div>
          </div>
      ))}
      <button class = "Button" onClick={()=>navigate('/')}> + Filmes</button>
    </div>
    </div>
  );
}

export default Criticas;
