import React, { useState } from 'react';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageLinkChange = (e) => {
    setImageLink(e.target.value);
  };

  const handleAddMovie = () => {
    if (!title || !description || !imageLink) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newMovie = {
        title: title,
        description: description,
        imageLink: imageLink,
      };
  
      // requisição POST servidor
      alert('Dados do novo filme e crítica: ' + JSON.stringify(newMovie));
  
      // Limpar o formulário após adicionar o filme
      setTitle('');
      setDescription('');
      setImageLink('');
    };
  
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
      };
  
    return (
      <div>
        <h1>Adicionar Filme e Crítica</h1>
        <button onClick={toggleFormVisibility}>Adicionar Filme</button>
        {isFormVisible && (
          <div className="container">
            <form>
              <div>
                <label>Link da Imagem do Filme:</label>
                <input type="text" value={imageLink} onChange={handleImageLinkChange} />
              </div>
              <div>
                <label>Nome do Filme:</label>
                <input type="text" value={title} onChange={handleTitleChange} />
              </div>
              <div>
                <label>Crítica:</label>
                <textarea value={description} onChange={handleDescriptionChange} />
              </div>
              <button onClick={handleAddMovie}>Adicionar Filme e Crítica</button>
            </form>
          </div>
        )}
      </div>
    );
  }
  
  export default AddMovie;


  