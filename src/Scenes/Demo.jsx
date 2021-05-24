import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillBug, AiOutlineInfoCircle } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { TiUpload } from "react-icons/ti";
import { FaLayerGroup, FaFilter } from "react-icons/fa";
import { BiSliderAlt, BiLeftTopArrowCircle } from "react-icons/bi";
import Grid from '@material-ui/core/Grid';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabComponent from './TabComponent'
import { navigateMainPage } from '../Redux/actions';

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
                        </div>
                        <div >
                            <TabComponent />
                        </div>


                    </Grid>



                </Grid>

            </div>

        )
    }
}
const mapStateToProps = state => ({
    app: state.app
})

const mapDispatchToProps = {
    navigateMainPage
}

const Leftbar = connect(

)(LeftbarComponent)

export default Leftbar;