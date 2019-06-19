import React, { Component } from 'react'
import styled from 'styled-components'
import UserPhoto from './userphoto'
import UserAbout from './userabout'
import UserInfo from './userinfo'
import UserLinks from './userlinks'
import User from '../../../useractions/User'


 const Outerbox = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 300px 1fr ;
  border-radius: 25px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3); */
  z-index: 1;
 `;

const Submit = styled.div`
 background: ${props => props.theme.lightblue};
 height: 40px;
 width: 150px;
 margin-left: 100px;
 text-align: center;
 line-height: 40px;
 border-radius: 15px;
`;


export default class usereditprofile extends Component {
  
// This method is being called in child comps to setState
  onChangeuserProfile(newuserProfile) {
    this.setState({
      user: {
      }
    })
    return user
    console.log()
  }
  render() {
    return (
      <User>
      {({ data: { me } }) => (
      <Outerbox>
        <UserPhoto />
        <UserAbout />
        <UserInfo />
        <UserLinks me={me} />
        <Submit submit={this.updateprofile}>Submit</Submit>
      </Outerbox>
      )}
      </User>
    )
  }
}
