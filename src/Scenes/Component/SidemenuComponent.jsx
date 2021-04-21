import React, { Component } from 'react';
import { AiFillLayout } from "react-icons/ai";
import { RiShieldFlashLine } from "react-icons/ri";
import { TiThListOutline } from "react-icons/ti";
import { GrGraphQl } from "react-icons/gr";
import { RiEnglishInput } from "react-icons/ri";
import { Button } from 'react';

export default class SidemenuComponent extends Component {
  render() {
    return (
      <div class="sidebar">
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <AiFillLayout />
        </div>
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <RiShieldFlashLine />
        </div>
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <TiThListOutline />
        </div>
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <GrGraphQl />
        </div>
        <div class="sideicon" style={{ marginBottom: '10px' }}>
          <GrGraphQl />
        </div>
      </div>
    )
  }
}