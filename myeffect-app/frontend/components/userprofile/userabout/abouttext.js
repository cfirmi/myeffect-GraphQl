import React, { Component } from 'react'
import styled from 'styled-components'
import { ProfileAbout } from '../../styles/Titles'


const Outerbox = styled.div`
display: grid;
`;

export default class abouttext extends Component {
  constructor(props) {
    super(props) 
  }
  render() {

    return (
      <Outerbox>
        <ProfileAbout>{this.props.user.about}</ProfileAbout>
      </Outerbox>
    )
  }
}
