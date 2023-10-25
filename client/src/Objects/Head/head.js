import React from 'react';
import "./head.css"
import HeadOb from "./HeadObjects/HeadOb"

class Header extends React.Component {
    render() {
      const { placeholder, description,type, id, name} = this.props;
  
      return (
        <div className='conjunto'>
          <div className='logo'>
            <h3>Cabaceiras</h3>
          </div>

          <div className='menuBar'>
            <HeaderItem name="Início" page=""/>
            <HeaderItem name="Hall da Fama" page=""/>
            <HeaderItem name="Perfil" page=""/>
            <HeaderItem name="Admin" page="admin"/>
          </div>
        </div>
      );
    }
  }
  
  export default head;