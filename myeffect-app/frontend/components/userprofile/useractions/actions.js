import React, { Component } from 'react'
import styled from 'styled-components'
import ActionBanner from './actionsbanner'
import ActionCards from './actionscards'

const Outerbox = styled.div`
  grid-column: 1 / -1;
  grid-row: 7;
  height: 100%;
`;

export default class actions extends Component {
  render() {
    return (
      <Outerbox>
        <ActionBanner />
        <ActionCards />
      </Outerbox>
    )
  }
}
