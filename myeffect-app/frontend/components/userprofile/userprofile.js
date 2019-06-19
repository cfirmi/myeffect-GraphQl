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
        bannerImage: "../../static/images/profile/header/me.jpg",
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum assumenda, aliquid animi illum, sint aut quam incidunt reiciendis vel quasi doloribus nemo omnis expedita, enim vero tempore. Quod voluptatem sapiente dolore. Dignissimos, commodi? Placeat numquam, ex ducimus et dolor laboriosam.',
        memories: [{image:"../../static/images/profile/memories/me.jpg"}, {image:"../../static/images/profile/memories/me2.jpg"}, {image:"../../static/images/profile/memories/me3.png"}, {image:"../../static/images/profile/memories/me4.jpg"}]
      }
    }
  }
  render() {
    return (
      <Outerbox >
        <Header user={this.state.user}  />
        <Info />
        <About user={this.state.user} />
        <Memories />
        <Actions />
        <Challenges />
      </Outerbox>
    )
  }
}
