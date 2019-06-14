import React, { Component } from 'react'
import styled from 'styled-components'
import Settings from '../components/settings/settings'

  const Outerbox = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    width: 100%;
  `;
export default class settings extends Component {
  render() {
    return (
      <Outerbox>
        <Settings />
      </Outerbox>
    )
  }
}
