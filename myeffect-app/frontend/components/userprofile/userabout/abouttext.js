import React, { Component } from 'react'
import styled from 'styled-components'
import { ProfileAbout } from '../../styles/Titles'


const Outerbox = styled.div`
display: grid;
`;

export default class abouttext extends Component {
  render() {
    return (
      <Outerbox>
        <ProfileAbout>Lorem nihil fuga aliquam porro, culpa laboriosam consectetur esse corporis quas nobis? Nihil beatae maiores reprehenderit voluptates harum debitis cumque doloremque, doloribus aperiam nostrum molestias dicta? Veritatis, reiciendis accusamus quo ea nesciunt earum voluptas.</ProfileAbout>
      </Outerbox>
    )
  }
}
