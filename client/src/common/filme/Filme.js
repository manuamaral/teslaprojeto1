import './Filme.css';

function Filme({ titulo, imagem, descricao, nota }) {
  const filmeStyles = {
    border: '1px solid aqua',
    padding: '10px',
    marginBottom: '10px',
    alignItems: 'center',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', // Alinha os elementos horizontalmente no centro
    textAlign: 'center'
    
  };

  const imageStyles = {
    width: '200px',
    height: 'auto',
    borderRadius: '8%',
    alignItems: 'center',
    marginBottom: '15px'
  };
  


  return (
    <div className='Filme'  style={filmeStyles}>
      <h3 class="Filme">{titulo}</h3>
      <img src={imagem} alt={titulo} style={imageStyles} />
      <p>Sinopse: {descricao} </p>
      <p> Nota: {nota} </p>
      </div>
   
  );
}

export default Filme;
