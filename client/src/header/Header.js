import React from 'react';
import './Header.css';
function Header() {

  return (
    <div className='main'>
    <header>
      
    <img
        src="/logo.png"
        alt="Logo"
        className="logo"
    />
      
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar" />
        <button>Buscar</button>
       
     
       
    
      </div>
  
      <nav className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Ação</a></li>
          <li><a href="#">Drama</a></li>
          <li><a href="#">Romance</a></li>
        </ul>
      </nav>
    
      </header>

</div>
      
    
  );
  


  


 

}


export default Header;