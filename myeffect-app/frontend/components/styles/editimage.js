import React, { Component } from 'react'
import styled from 'styled-components'


 const Outerbox = styled.div`
  background: white;
  height: 40px;
  width: 100px;
  line-height: 40px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.lightblue};
  border-radius: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
 `;

export default class editimage extends Component {
  render() {
    return (
      <Outerbox>
        Edit Image
      </Outerbox>
    )
  }
}
