import React, { Component } from 'react'
import styled from 'styled-components'
import AboutBanner from './aboutbanner'
import AboutText from './abouttext'


const Outerbox = styled.div`
 /* background:red; */
 grid-column: 1 / -1;
 grid-row: 5;
 /* max-width: 600px; */
 margin: 0 auto;
 `;

export default class about extends Component {
  render() {
    return (
      <Outerbox>
        <AboutBanner />
        <AboutText />
      </Outerbox>
    )
  }
}
