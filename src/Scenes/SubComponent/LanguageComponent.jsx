import React, { Component } from 'react';

import { ImSphere } from "react-icons/im";

class LanguageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render() {
    return (
      <div class="sidebar" style={{float:'right'}}>          
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <ImSphere />
        </div>       
      </div>
    )
  }
}
export default LanguageComponent;