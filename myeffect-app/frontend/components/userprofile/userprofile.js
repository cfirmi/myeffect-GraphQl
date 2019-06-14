import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './userheader/header'
import Info from './userinfo/info'
import About from './userabout/about'
import Memories from './usermemories/memories'
import Actions from './useractions/actions'
import Challenges from './userchallenges/challenges'

 const Outerbox = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 75px 75px 100px 300px 150px 750px 750px 750px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 100px;
  text-align: center;
 `;

export default class profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: 'Christian',
        lastName: 'Firmi',
        birthday: '1995-03-25',
        age: '24',
        profileImage: "../../static/images/profile/header/me.jpg",
        bannerImage: "../../static/images/profile/header/me.jpg"
      }
    }
  }
  render() {
    return (
      <Outerbox >
        <Header user={this.state.user}  />
        <Info />
        <About />
        <Memories />
        <Actions />
        <Challenges />
      </Outerbox>
    )
  }
}
