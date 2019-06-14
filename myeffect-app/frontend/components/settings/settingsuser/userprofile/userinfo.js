import React, { Component } from 'react'
import styled from 'styled-components'
import {SettingsTitle, SettingsSubTitle} from '../../../styles/Titles'
import { SettingsInput } from '../../../styles/Inputs'
import User from '../../../useractions/User'

const Outerbox = styled.div`
  /* background: red; */
  grid-column: 1 / 3;
  width: 100%;
  max-width: 400px;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
const InputBox = styled.div`
 grid-column: 1 / -1;
 grid-row: 2;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: 40px 60px;
`;


export default class userinfo extends Component {
  
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };
  render() {
    return (
      <User>
      {({ data: { me } }) => (
        <Outerbox>
          <SettingsTitle>Profile Info</SettingsTitle>
          <InputBox>
            <SettingsSubTitle>Name</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="name" defaultValue={me.name}/>
          </InputBox>
          <InputBox>
            <SettingsSubTitle>City</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="city"  defaultValue={me.city} />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Phone Number</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="phone" defaultValue={me.phone} />
          </InputBox>
        </Outerbox>
      )}
      </User>
    )
  }
}
