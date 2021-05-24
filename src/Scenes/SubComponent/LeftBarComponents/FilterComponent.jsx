import React, { Component } from 'react';
import { GrFormAdd } from "react-icons/gr";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class filterComponent extends Component {
    render() {
        return (

            <div class="body-heading">
                <div class="panel-inner">
                    <div class="heading1">
                        Filter
                    </div>
                </div>
                <div>                    
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ backgroundColor: 'rgb(15, 150, 104)' }}
                        startIcon={<GrFormAdd />}
                    >
                       Add Data
                    </Button>
                    <div class="divider"><Divider style={{ color: 'white' }} /></div>
                </div>
            </div>
        )
    }
}
export default filterComponent;