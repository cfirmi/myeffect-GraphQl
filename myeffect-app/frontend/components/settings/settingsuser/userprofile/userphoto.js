import React, { Component } from 'react'
import styled from 'styled-components'
import EditImage from '../../../styles/editimage'

const Outerbox = styled.div`
  /* background: red; */
  width: 300px;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin-left: 50%;
  transform: translateX(-50%);
`;
 const Image = styled.div`
  background: #000;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  height: 200px;
  width: 200px;
 `;
  const Text = styled.div`
    font-size: 13px;
    text-align: center;
    color: ${props => props.theme.lightgrey};
  `;

export default class userphoto extends Component {
  render() {
    return (
      <Outerbox>
        <Image src="" alt=""/>
        <Text>Add a picture to gain recognition</Text>
        <EditImage />
      </Outerbox>
    )
  }
}
