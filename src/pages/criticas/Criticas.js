import './Criticas.css';
import {useNavigate} from 'react-router-dom'

function Criticas() {
  const navigate = useNavigate()

  return (
    <div className="Criticas">
      CRITICAS
      <button onClick={()=>navigate('/')}>Ir para home</button>
    </div>
  );
}

export default Criticas;
