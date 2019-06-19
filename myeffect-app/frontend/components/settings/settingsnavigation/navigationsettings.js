import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './navigationtitle'
import Links from './links'

 const Outerbox = styled.div`
  margin-top: 70px;
  z-index: 10;
 
 `;

export default class navigationsettings extends Component {
  render() {
    return (
      <Outerbox>
        <Title />
        <Links />
      </Outerbox>
    )
  }
}
