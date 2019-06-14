import React, { Component } from 'react'
import styled from 'styled-components'
import {ProfileTitle} from '../../styles/Titles'


 const Outerbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 100px;
  grid-template-rows: 50px;
  margin-bottom: 10px;
 `;
  const SeeMore = styled.div`
  color: ${props => props.theme.lightblue};
  grid-column: -1;
  line-height: 75px;
  cursor: pointer;
  `;
export default class memoriesbanner extends Component {
  render() {
    return (
      <Outerbox>
        <ProfileTitle>Memories</ProfileTitle>
        <SeeMore>See More</SeeMore>
      </Outerbox>
    )
  }
}
