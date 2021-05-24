import React, { Component } from 'react';
import { RiShieldFlashLine } from "react-icons/ri";

class MapComponent extends Component {
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
          <RiShieldFlashLine />
        </div>       
      </div>
    )
  }
}
export default MapComponent;