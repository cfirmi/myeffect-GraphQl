import React, { Component } from 'react'
import styled from 'styled-components'
import ShareButton from '../../styles/sharebutton'

 const Outerbox = styled.div`
  grid-column: 3 / -1;
  grid-row: 1;
  height: 100px;
  width: 100%;
  align-self: flex-end;
 `;

export default class headershare extends Component {
  render() {
    return (
      <Outerbox>
       <ShareButton />
      </Outerbox>
    )
  }
}
