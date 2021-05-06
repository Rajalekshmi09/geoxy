import React, { Component } from 'react';
import { AiFillLayout } from "react-icons/ai";
import { RiShieldFlashLine } from "react-icons/ri";
import { TiThListOutline } from "react-icons/ti";
import { GrGraphQl } from "react-icons/gr";
import { RiEnglishInput } from "react-icons/ri";
import { Button } from 'react';
import CardView from '../SubComponent/CardView';

class SidemenuComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  buttonClick = () => {
    this.setState({
      visible: !this.state.visible
    });
    console.log(this.state.visible)
  };
  render() {
    return (
      <div class="sidebar">
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <AiFillLayout />
        </div>
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <RiShieldFlashLine />
        </div>

        <div>
          {
            this.state.visible ? <CardView /> :
              <div class="sideicon" style={{ marginBottom: '10px' }}>
                <TiThListOutline onClick={this.buttonClick} />
              </div>
          }
        </div>

        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <GrGraphQl />
        </div>
        <div class="sideicon" style={{ marginBottom: '10px', }}>
          <GrGraphQl />
        </div>
      </div>
    )
  }
}
export default SidemenuComponent