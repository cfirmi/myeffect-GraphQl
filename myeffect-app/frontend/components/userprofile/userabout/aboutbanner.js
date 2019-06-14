import React, { Component } from 'react'
import styled from 'styled-components'
import {ProfileTitle} from '../../styles/Titles'


 const Outerbox = styled.div`
  display: grid;
 `;


export default class aboutbanner extends Component {
  render() {
    return (
      <Outerbox>
        <ProfileTitle>About</ProfileTitle>
      </Outerbox>
    )
  }
}
