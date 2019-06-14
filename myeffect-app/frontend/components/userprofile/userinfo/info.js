import React, { Component } from 'react'
import styled from 'styled-components'
import InfoTiles from './infotiles'

const Outerbox = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  grid-row: 4;
  height: 250px;
`;

export default class info extends Component {
  render() {
    return (
      <Outerbox>
        <InfoTiles />
      </Outerbox>
    )
  }
}
