import React from 'react';
import "./foot.css"

class Footer extends React.Component {
    render() {
      const { placeholder, description,type, id, name} = this.props;
  
      return (
        <div className='footer'>
            <hr/>
        </div>
      );
    }
  }
  
  export default foot;