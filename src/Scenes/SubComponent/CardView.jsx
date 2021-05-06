import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdDashboard } from "react-icons/md";
class CardView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card variant="outlined" style={{ backgroundColor: 'blue' }}>
        <CardActions onClick={this.buttonClick}>
          <MdDashboard style={{ float: 'right' }} />
        </CardActions>
        <CardContent>
          <Typography>
            content
          </Typography>
          <Typography>
            content
          </Typography>
          <Typography>
            content
          </Typography>

        </CardContent>

      </Card>
    );
  }
}
export default CardView;