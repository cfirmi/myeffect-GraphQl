import React, { Component } from 'react'
import styled from 'styled-components'

const img = "../../static/images/profile/memories/me.jpg"

 const Outerbox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(6, 90px);
  grid-gap: 15px;
  grid-template-areas:
  "image1 image1 image2 image2 image2"
  "image1 image1 image2 image2 image2"
  "image1 image1 image2 image2 image2"
  "image1 image1 image4 image4 image4"
  "image3 image3 image4 image4 image4"
  "image3 image3 image4 image4 image4";
  div {
    border-radius: 10px;
    object-fit: cover;
    background-size: cover;
  }
 `;
  const Image1 = styled.div`
   background-image: url("../../static/images/profile/memories/me.jpg");
   grid-area: image1;
  `;
  const Image2 = styled.div`
   background-image: url("../../static/images/profile/memories/me2.jpg");
   grid-area: image2;
  `;
  const Image3 = styled.div`
   background-image: url("../../static/images/profile/memories/me3.png");
   grid-area: image3;
  `;
  const Image4 = styled.div`
   background-image: url("../../static/images/profile/memories/me4.jpg");
   grid-area: image4;
  `;

export default class memoriesgallery extends Component {
  render() {
    return (
      <Outerbox>
        <Image1 src={img} />
        <Image2 src={img} />
        <Image3 src={img} />
        <Image4 src={img} />
      </Outerbox>
    )
  }
}
