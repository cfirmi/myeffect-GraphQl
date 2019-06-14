import React, { Component } from 'react'
import styled from 'styled-components'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';

 const Outerbox = styled.div`
  width: 95px;
  grid-column: 1 / -1;
  grid-row: 1 / 4;
  align-self: center;
  margin-top: -40px;
  margin-left: 50%;
  transform: translateX(-50%);
 `;

export default class challengesprogresscircle extends Component {
  render() {
    const { points } = this.props
    return (
      <Outerbox>
      <CircularProgressbarWithChildren 
      maxValue={1500}
      value={points}
      styles={buildStyles({
        backgroundColor: "white",
        pathColor: "#00B8F1",
        trailColor: "transparent",
        rotation: -1 / 4,
        strokeLinecap: "butt",
        trailColor: "#eee"
        })}
      >
        <img style={{ width: 80, marginTop: '-25px' }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
      </CircularProgressbarWithChildren>
    </Outerbox>
    )
  }
}
