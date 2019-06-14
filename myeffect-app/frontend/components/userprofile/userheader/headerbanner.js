import React, { Component } from 'react'
import styled from 'styled-components'

const headerMask = '../../static/images/profile/header/headerImage/header-mask.svg'

const ImageMask = styled.img`
grid-column: 1 / -1;
grid-row: 1;
mask-image: url(${headerMask});
mask-repeat: no-repeat;
mask-size: contain;
width: 100%;
max-width: 1000px;
margin-left: 50%;
transform: translateX(-50%);
background-repeat: no-repeat;
  pointer-events: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
z-index: 1;
`;

export default class headerbanner extends Component {
  render() {
    return (
        <ImageMask unselectable="on" src={this.props.user.bannerImage} />
    )
  }
}
