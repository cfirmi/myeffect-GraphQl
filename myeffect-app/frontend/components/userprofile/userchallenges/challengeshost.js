import React, { Component } from 'react'
import styled from 'styled-components'
const hostimage = '../../../static/images/profile/challenges/card/image-host.jpg'

const ChallengeHost = styled.div`
margin-top: -20px;
grid-column: 1 / -1;
grid-row: 5;
color: ${props => props.theme.grey};
p {
  font-weight: 200;
  line-height: 20px;
}
.hostProfile {
  display: grid;
  grid-template-columns: 25px 1fr;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 150px; height: 25px;
}
.hostImage {
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
}
.hostName {
  margin-top: 0px; margin-left: 5px;
  text-align: left;
  line-height: 25px;
}
.hostTitle {
  height: 10px;
}
`;

export default class challengeshost extends Component {
  render() {
    return (
      <ChallengeHost>
        <p className="hostTitle">Hosted by:</p>
        <div className="hostProfile">
          <img className="hostImage" src={hostimage} alt="Host Image"/>
          <p className="hostName">{this.props.host}</p>
        </div>
      </ChallengeHost>
    )
  }
}
