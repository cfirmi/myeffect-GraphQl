import React, { Component } from 'react'
import styled from 'styled-components'
import {SettingsTitle, SettingsSubTitle} from '../../../styles/Titles'
import User from '../../../useractions/User'

 const Outerbox = styled.div`
  /* background: green; */
  /* border: 3px solid black; */
  padding: 0px 30px;
  grid-column: 3 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30px 100px 100px;
 `;


const InputBox = styled.div`
   grid-column: 1 / -1;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: 50px 100px 100px;
  `;
  const TextInput = styled.input`
   background: ${props => props.theme.inputbg};;
   border: 1px solid ${props => props.theme.lightgrey};
   grid-column: 1 / -1;
   min-height: 150px;
   text-align: top;
   padding-left: 20px;
   grid-row: 2 / 3;
   border-radius: 10px;
  `;

    

export default class userabout extends Component {

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  
  render() {
    return (
      <User>
      {({ data: { me } }) => (
        <Outerbox>
          <SettingsTitle>Profile Description</SettingsTitle>
          <InputBox>
            <SettingsSubTitle>About</SettingsSubTitle>
            <TextInput onChange={this.saveToState}  type="text" value={me.about} />
          </InputBox>
        </Outerbox>
        )}
      </User>
    )
  }
}
