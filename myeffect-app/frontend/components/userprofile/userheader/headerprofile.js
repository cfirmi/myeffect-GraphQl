import React, { Component } from 'react'
import styled from 'styled-components'

 const Outerbox = styled.div`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 2;
  margin-top: -130px;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  p {
    margin-top: -10px;
    color: ${props => props.theme.black};
    font-size: 25px;
    font-weight: 200;
  }
 `;

 const ProfileImage = styled.img`
  border-radius: 50%;
 `;

export default class headerprofile extends Component {
  constructor(props) {
    super(props)
  }
    render() {
      const username = this.props.user.firstName + " " + this.props.user.lastName
      return(
        <Outerbox>
          <ProfileImage height="90px" width="90px" src={this.props.user.profileImage} alt="gr"/>
          <p>{username}</p>
        </Outerbox>
      )
    }
}
