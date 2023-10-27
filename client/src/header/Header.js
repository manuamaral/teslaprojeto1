import React from 'react';
import './Header.css';
function Header() {
  
  
  return (

    <header>
      <div className="logo img">
        <img src="1.png" alt="Opine Hollywood" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Pesquisar" />
        <button>Buscar</button>
       
     
      
    
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">Página Inicial</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;