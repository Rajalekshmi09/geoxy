import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FaLayerGroup, FaFilter } from "react-icons/fa";
import { BiSliderAlt, BiLeftTopArrowCircle } from "react-icons/bi";
import Tooltip from '@material-ui/core/Tooltip';

import LayerComponent from './SubComponent/LeftBarComponents/LayerComponent';
import FilterComponent from './SubComponent/LeftBarComponents/FilterComponent';
import BaseMapComponent from './SubComponent/LeftBarComponents/BaseMapComponent';
import InteractionsComponent from './SubComponent/LeftBarComponents/InteractionsComponent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

class TabComponent extends Component {
    // const classes = useStyles();
    // const [value, setValue] = React.useState(0);
    constructor(props) {
        super(props)
        this.state = {
            value: null,
        }
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
    };



    render() {
        return (
            <div >
                <Tabs
                    class="headerbar-tabrow"
                    value={this.state.value}
                    onChange={this.handleChange}
                    variant="scrollable"
                    scrollButtons="off"
                    aria-label="scrollable prevent tabs example"
                >
                    <Tooltip title="Layer">
                        <Tab icon={<FaLayerGroup />} aria-label="phone" {...a11yProps(0)} />
                    </Tooltip>
                    <Tooltip title="Filter">
                        <Tab icon={<FaFilter />} aria-label="favorite" {...a11yProps(1)} />
                    </Tooltip>
                    <Tooltip title="Interactions">
                        <Tab icon={<BiLeftTopArrowCircle />} aria-label="person" {...a11yProps(2)} />
                    </Tooltip>
                    <Tooltip title="Basemap">
                        <Tab icon={<BiSliderAlt />} aria-label="help" {...a11yProps(3)} />
                    </Tooltip>
                </Tabs>
                <div class="leftbar-body">
                    <TabPanel value={this.state.value} index={0}>
                        <LayerComponent />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1}>
                        <FilterComponent />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={2}>
                        <InteractionsComponent />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={3}>
                        <BaseMapComponent />
                    </TabPanel>
                </div>
            </div>

        );
    }
}

export default TabComponent;

