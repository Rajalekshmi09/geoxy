import React, { Component } from 'react';
import SidemenuComponent from './SidemenuComponent'
import LeftbarComponent from './LeftbarComponent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class HomePage extends Component {
    render() {
        return (
            <div >
                <Grid container class="home-background" >
                    <Grid item xs={10}  >
                        <LeftbarComponent />
                    </Grid>
                    <Grid item xs={12} alignContent="flex-end">
                        <SidemenuComponent />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default HomePage;
