import React from 'react';
import './Header.css';
function Header() {

  return (
    <div className='main'>
    <header>
      
        <img className="logo" src="logo_oph.png" alt="Opine Hollywood" />
      
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