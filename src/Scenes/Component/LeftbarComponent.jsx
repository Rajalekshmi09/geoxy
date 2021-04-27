import React, { Component } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillBug, AiOutlineInfoCircle } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { TiUpload } from "react-icons/ti";
import { FaLayerGroup, FaFilter } from "react-icons/fa";
import { BiSliderAlt, BiLeftTopArrowCircle } from "react-icons/bi";
import Grid from '@material-ui/core/Grid';
class LeftbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
    console.log(this.state.visible)
  };

  render() {
    return (
      <div style={{ paddingTop: '70px' }}>
        <Grid container spacing={1} style={{ marginLeft: '20px' }} >
          {
            this.state.visible ?
              <Grid item xs={3}>
                <div class='headerbar'>
                  <h2 style={{ color: '#20a9c3' }}>geoxy</h2>
                  <div class='header-title'>
                    <div class="header-icon">
                      <AiFillBug style={{ width: '20%' }} />
                      <AiOutlineInfoCircle style={{ width: '20%' }} />
                      <DiDatabase style={{ width: '20%' }} />
                      <TiUpload style={{ width: '20%' }} />
                    </div>
                  </div>
                  <div class="header-row">
                    <FaLayerGroup style={{ width: '15%' }} />
                    <FaFilter style={{ width: '15%' }} />
                    <BiLeftTopArrowCircle style={{ width: '15%' }} />
                    <BiSliderAlt style={{ width: '15%' }} />
                  </div>
                </div>

                <div class="leftbar-body">
                  body
                </div>
              </Grid>
              : []
          }
          <Grid item xs={1} >
            <div class="toggle" >
              <MdKeyboardArrowRight onClick={this.toggle} />
            </div>
          </Grid>
        </Grid>

      </div>

    )
  }
}

export default LeftbarComponent;