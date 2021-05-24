import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdDashboard } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
class CardView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
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
      <div class="sidebar" style={{float:'right'}}>
        {
          this.state.visible ?
        <div class="sideicon" style={{ marginBottom: '10px' }}>
      <TiThListOutline onClick={this.buttonClick}/>
    </div>
    :
      <Card variant="outlined" style={{ backgroundColor: 'blue' }}>
        <CardActions onClick={this.buttonClick}>
          <MdDashboard style={{ float: 'right' }} />
        </CardActions>
        <CardContent>
         <div style={{height:'5%',backgroundColor:'pink'}}>

         </div>
          <Typography>
            content
          </Typography>

        </CardContent>

      </Card>
  }
      </div>
    );
  }
}
export default CardView;