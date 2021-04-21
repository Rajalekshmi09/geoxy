import React, { Component } from 'react';
import SidemenuComponent from './SidemenuComponent'
import LeftbarComponent from './LeftbarComponent';
class MainComponent extends Component {
  render() {
    return (
      <div class="home-background">
        <SidemenuComponent />
        <LeftbarComponent />
      </div>
    );
  }
}
export default MainComponent;
