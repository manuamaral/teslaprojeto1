import './Filme.css';

function Filme({titulo, descricao, nota, imagem}) {

  return (
    <div className="Filme">
        <div className="banner">
            <img src={imagem}/>
        </div>

        <div className="info">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p>{nota}</p>
        </div>
    </div>
  );
}

export default Filme;
