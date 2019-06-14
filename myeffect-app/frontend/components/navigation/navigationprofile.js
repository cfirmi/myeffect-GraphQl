import React, { Component } from 'react'
import styled from 'styled-components'

const image = '../../static/images/profile/me.JPG'
const name = 'Christian'

 const Outerbox = styled.div`
  margin-top: 70px;
 `;

 const ProfileImage = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
 const ProfileName = styled.div`
  text-align: center;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 200;
  margin-top: -5px;
 `;

export default class profile extends Component {
  render() {
    return (
      <Outerbox>
        <ProfileImage src={image} alt="Profile image"/>
        <ProfileName>{name}</ProfileName>
      </Outerbox>
    )
  }
}
