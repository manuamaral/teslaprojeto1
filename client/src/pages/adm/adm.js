//addmovie

import React, { useState } from 'react';
import { useEffect } from "react";
import './Adm.css'
import Button from '../../common/Button/Button'
import InputData from '../../common/InputData/InputData'
import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
import Axios from 'axios'
import http from '../export'


function Adm() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");},
     []);

  
  const [movieName, setmovieName] = useState("");
  const [movieSin, setmovieSin] = useState("");
  const [movieBanner, setmovieBanner] = useState("");

  useEffect(() => {console.log(movieName)}, [movieName]);
 
  
  const handleClick = (e) => {
    
    console.log(movieName)
    http.post('/Adm/',{
      nome: movieName,
      ano: movieProd,
      sinopse: movieSin,
      fotoURL: movieBanner,
    });
  };

return (
    <div className="Adm">
      <Header/>
      
      <div className= "form">
        <label id="nomeFilme"><h2>Inserção de filme</h2></label>
        <InputData description="Título" placeholder="Nome do filme" type="text" id="movieName" className="movieName"
          onChange={setmovieName}
        />
        <InputData description="Ano de Produção" placeholder="Digite um número" type="number" id="releaseYear" className="releaseYear"
          onChange={setmovieProd}
        />
        
        <InputData description="Sinopse" placeholder="Digite aqui uma breve descrição da história do filme" type="Text" id="synopsis" className="synopsis"
          onChange={setmovieSin}
        />

        <InputData description="Banner" placeholder="Insira a URL do banner do filme" type="url" id="bannerURL" className="bannerURL"
          onChange={setmovieBanner}
    />
   </div>
        <Button
          text="Enviar Filme" 
          onClick={handleClick}
          icon={<i className='pi pi-cloud-upload' style={{ fontSize: '1rem' }}></i>}>/</Button>

        <Footer/>
      </div>

    
    
  );
}
export default Adm;