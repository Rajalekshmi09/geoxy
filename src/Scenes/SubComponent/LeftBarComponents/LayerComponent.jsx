import React, { Component } from 'react';
import { GrFormAdd } from "react-icons/gr";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
class LayerComponent extends Component {
    render() {
        return (
            <div class="body-heading">
                <div class="panel-inner">
                    <div class="heading1">
                        Layers
                    </div>
                </div>
                <div>
                    <div>                        
                        <Button
                        variant="contained"
                        color="secondary"
                        size="small"                       
                        startIcon={<GrFormAdd />}
                    >
                       Add Data
                    </Button>
                    </div>

                    <div class="divider"><Divider style={{ color: 'white' }} /></div>
                    <div class="heading2">
                        <label>Layer Blending</label>
                    </div>
                    <div>

                        <FormControl >
                            <NativeSelect
                                defaultValue={2}
                                inputProps={{
                                    name: 'name',
                                    id: 'uncontrolled-native',
                                }} >
                                <option class="select-box" value={1}>additive</option>
                                <option class="select-box" value={2}>normal</option>
                                <option class="select-box" value={3}>subtractive</option>
                            </NativeSelect>

                        </FormControl>
                    </div>
                </div>
            </div>
        )
    }
}
export default LayerComponent;