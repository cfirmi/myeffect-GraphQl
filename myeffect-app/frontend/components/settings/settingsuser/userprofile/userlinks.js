import React, { Component } from 'react'
import styled from 'styled-components'
import {SettingsTitle, SettingsSubTitle} from '../../../styles/Titles'
import {SettingsInput} from '../../../styles/Inputs'
import User from '../../../useractions/User'


 const Outerbox = styled.div`
  /* background: red; */
  grid-column: 3 / -1;
  width: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
  const Columns = styled.div`
   grid-row: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 20px;
  `;
 const InputBox = styled.div`
  grid-template-rows: 40px 60px;
`;

export default class userlinks extends Component {
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  render() {
    return (
      // <User>
      // {({ data: { me } }) => (
      <Outerbox>
        <SettingsTitle>Social Media Links</SettingsTitle>
        <Columns>
          <InputBox>
            <SettingsSubTitle>Facebook</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="facebook" defaultValue={this.props.me.facebook} />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>LinkedIn</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="linkedIn" defaultValue={this.props.me.linkedin}/>
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Youtube</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="youtube" defaultValue={this.props.me.youtube}/>
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Instagram</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="instagram" defaultValue={this.props.me.instagram}/>
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Twitter</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="twitter" defaultValue={this.props.me.twitter}/>
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Google Plus +</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="googleplus"  defaultValue={this.props.me.googleplus} />
          </InputBox>
        </Columns>
      </Outerbox>
    // )}
    // </User>
    )
  }
}
