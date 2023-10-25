import React from 'react';
import "./input.css"


class InputData extends React.Component {
    render() {
      const { placeholder, description,type, id, name, onChange} = this.props;
  
      return (
        <div className='container'>
          <label className='description'>{description}</label>
          <input type={type} 
                placeholder={placeholder} 
                className='input' 
                id={id} 
                name = {name} 
                onChange={(e)=>onChange(e.target.value)}>
          </input>
        </div>
      );
    }
  }
  
  export default input;