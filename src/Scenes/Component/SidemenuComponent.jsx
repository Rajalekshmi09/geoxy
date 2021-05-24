import React, { Component } from 'react';
import { AiFillLayout } from "react-icons/ai";
import { RiShieldFlashLine } from "react-icons/ri";
import { TiThListOutline } from "react-icons/ti";
import { GrGraphQl } from "react-icons/gr";
import { ImSphere } from "react-icons/im";
import { Button } from 'react';
import CardView from '../SubComponent/CardView';
import DuelMapView from '../SubComponent/DuelMapView';
import MapComponent from '../SubComponent/MapComponent';
import DrawMapComponent from '../SubComponent/DrawMapComponent';
import LanguageComponent from '../SubComponent/LanguageComponent';
import Grid from '@material-ui/core/Grid';
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
      <div class="sidebar" >
        {/* <DuelMapView />
        <MapComponent />
        <CardView />
        <DrawMapComponent />
        <LanguageComponent /> */}

        <Grid container spacing={1} direction="column" justify="flex-end">
          <Grid container   >
            <DuelMapView />
          </Grid>
          <Grid container >
            <MapComponent />
          </Grid>
          <Grid container  >
            <CardView />
          </Grid>
          <Grid container  >
            <DrawMapComponent />
          </Grid>
          <Grid container  >
            <LanguageComponent />
          </Grid>
        </Grid>
      </div>

    )
  }
}
export default SidemenuComponent