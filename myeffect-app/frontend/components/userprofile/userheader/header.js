import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderShare from './headershare'
import HeaderProfile from './headerprofile';
import HeaderBanner from './headerbanner';


const notification = '../../static/images/profile/header/headerImage/icon-notification.svg'

 const Outerbox = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
 `;

  const Notification = styled.img`
   position: absolute;
   top: 35px; right: 40px;
   height: 20px;
   z-index: 100;
  `;

export default class header extends Component {
  render() {
    return (
      <Outerbox>
        <HeaderProfile user={this.props.user} />
        <HeaderBanner user={this.props.user} />
        <Notification src={notification} alt="my-effect notification" />
        <HeaderShare />
      </Outerbox>
    )
  }
}
