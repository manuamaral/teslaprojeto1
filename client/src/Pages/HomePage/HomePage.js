import React, { useState } from 'react';
import { useEffect } from "react";
import './Page.css'
import Header from '../../common/Header/Header';
import http from '../export';
import Button from '../../common/Button/Button';
import CardFilm from '../../common/Card/CardFilm';
import Footer from '../../common/Footer/Footer';
import SearchBar from '../../common/SearchBar/SearchBar';
import PopUp from '../../common/PopUp/PopUp';


function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  const[movieReviewList, setmovieList] = useState([])

  useEffect(() => {
    http.get('/Page/').then((response) => {
      setmovieList(response.data);
      
    });
  },[]);

  const [popupOpen, setPopupOpen] = useState(false);
  
  const openPopup = (val) => {
    console.log("Alanzin");
    setPopupOpen(true);
    setFilmeEscolhido(val.id);
    setFilmeNome(val.nome)
  };

  const closePopup = (e) => {
    console.log("Alanzin");
    setPopupOpen(false);
  };
  
  const [filmeEscolhido, setFilmeEscolhido] = useState("");
  const [filmeNome, setFilmeNome] = useState("");

  
  const [pesquisa, setPesquisa] = useState('')
  
return (
    <div>
      {/* PARTE SUPERIOR */}
      <div className='header'>
        <Header/>
      </div>


      {/* PARTE DO CONTEÚDO */}
      <div className='conteudo'>
        <SearchBar type= "text" placeholder="Buscar filme..." onChange={setPesquisa} />
        {movieReviewList.filter((val) =>{
          if (pesquisa == ""){
            return val;
          } else if (val.nome.toLowerCase().includes(pesquisa.toLowerCase())){
            return val
          }
        }).map((val) =>{
          return (
              <div> 
                  <CardFilm
                    title={val.nome}
                    informacoes = {val.sinopse}
                    banner = {val.fotoURL}
                    nota = {val.estrela}
                    icones = {val.icones}
                    onClick={() => openPopup(val)}
                  />
              </div>
          )  
        })
        }
        {/*passar esses botões para o PopUp*/}
        

        {/* O TAL DO POPUP */}
        {popupOpen && (
            <PopUp close={closePopup} filmeTitle = {filmeNome} id = {filmeEscolhido}/>
        )}

      </div>
      

      {/* PARTE INFERIOR */}
      <div className='rodape'>
        {!popupOpen && (
            <Footer/>
        )}
        
      </div>
        
    </div>
  );
}

export default Page;









































/*import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Filme 1',
    description: 'Descrição do Filme 1',
    imageLink: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Filme 2',
    description: 'Descrição do Filme 2',
    imageLink: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Filme 3',
    description: 'Descrição do Filme 3',
    imageLink: 'https://via.placeholder.com/300x200',
  },
];

function PagePage() {
  return (
    <div className="container">
      <h1>Lista de Filmes</h1>
      <div>
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.imageLink} alt={movie.title} />
            </Link>
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-description">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PagePage;
*/