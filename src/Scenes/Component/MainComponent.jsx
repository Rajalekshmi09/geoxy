import React, { Component } from 'react';
import SidemenuComponent from './SidemenuComponent'
import LeftbarComponent from './LeftbarComponent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class MainComponent extends Component {
  render() {
    return (
      <div >
        <Grid container class="home-background" >
          <Grid item >


            <LeftbarComponent />
            <SidemenuComponent />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default MainComponent;
