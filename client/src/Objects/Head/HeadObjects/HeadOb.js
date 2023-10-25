import React from 'react';
import "./HeadOb.css"
import {useNavigate} from 'react-router-dom'


const HeaderItem =(props)=>{
      const {name, page} = props;
      const navigate = useNavigate()

      return (
        <button className='botaoMenu' onClick={(e)=>navigate('/'+page)}>{name}</button>
      );
      
}
  
  export default HeadOb;