import React, { Component } from 'react'
import styled from 'styled-components'
import ChallengesBanner from './challengesbanner'
import ChallengesCards from './challengescards'

 const Outerbox = styled.div`
 grid-column: 1 / -1;
 grid-row: 8;
 height: 100%;
 `;

export default class challenges extends Component {
  render() {
    return (
      <Outerbox>
        <ChallengesBanner />
        <ChallengesCards />
      </Outerbox>
    )
  }
}
