import React, { Component } from 'react';
import { AiFillLayout } from "react-icons/ai";

class DuelMapView extends Component {
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
          <AiFillLayout />
        </div>       
      </div>
    )
  }
}
export default DuelMapView;