import React, { Component } from 'react'
import styled from 'styled-components'
import Progress from './challengesprogresscircle'
import ChallengesHost from './challengeshost'

const handclap = '../../../static/images/profile/challenges/card/icon-handclap.svg'
const hostimage = '../../../static/images/profile/challenges/card/image-host.jpg'

const Outerbox = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 50px);
    height: 250px; width: 100%;
    color: ${props => props.theme.black};
    background: #fff;
  `;
  const InnerBox = styled.div`
    background: white;
    box-shadow: ${props => props.theme.bsblack};
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    border-radius: 10px;
  `;
  const TotalPeople = styled.div`
    display: grid;
    grid-template-columns: 40px 50px;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    align-self: center;
    line-height: 14px;
    color: ${props => props.theme.lightblue};
    .icon {
      grid-column: 1;
      grid-row: 1;
      height: 30px;
      padding-left: 10px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .numbers {
      grid-column: 2;
      grid-row: 1;
    }
  `;
  const ChallengeIcon = styled.img`
    /* background: purple; */
    grid-column: 7 / -1;
    grid-row: 1 / 4;
    align-self: center;
    height: 20px;
  `;
  const ChallengeTitle = styled.div`
    /* background: pink; */
    grid-column: 1 / -1;
    font-weight: 200;
    font-size: 19px;
    grid-row: 2 / 5;
    align-self: center;
  `;
  const ChallengeDesc = styled.div`
    /* background: pink; */
    grid-column: 1 / -1;
    font-weight: 200;
    font-size: 14px;
    grid-row: 4;
    line-height: 17px;
    margin-top: -10px;
    padding: 5px 15px;
    /* align-self: center; */
    `;




export default class challengescard extends Component {
  render() {
    const { name, points, host, desc, icon  } = this.props
    return (
      <Outerbox>
        <InnerBox></InnerBox>
        <TotalPeople>
          <img className="icon" src={handclap} alt="MyEffect handclap" />
          <div className="numbers">
            {points} / 1500 
          </div>
        </TotalPeople>
        <Progress points={points}/>
        <ChallengeIcon src={icon} />
        <ChallengeTitle>{name}</ChallengeTitle>
        <ChallengeDesc>{desc}</ChallengeDesc>
        <ChallengesHost host={host} />
      </Outerbox>
    )
  }
}
