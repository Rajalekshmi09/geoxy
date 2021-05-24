import React, { Component } from 'react';

import { GrGraphQl } from "react-icons/gr";

class DrawMapComponent extends Component {
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
          <GrGraphQl />
        </div>       
      </div>
    )
  }
}
export default DrawMapComponent;