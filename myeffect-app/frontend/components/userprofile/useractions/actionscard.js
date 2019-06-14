import React, { Component } from 'react'
import styled from 'styled-components'

import Progress from './actionsprogresscircle'

const people = '../../../static/images/profile/actions/card/people.svg'


 const Outerbox = styled.div`
    background: #fff;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 50px);
    height: 250px; width: 100%;
    color: ${props => props.theme.black};
    font-size: 17px;
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
    grid-template-rows: 20px 20px;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    align-self: center;
    color: ${props => props.theme.lightblue};
    .icon {
      grid-column: 1 / -1;
      grid-row: 1;
      height: 30px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .numbers {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  `;
  const RewardCoin = styled.div`
    /* background: blue; */
    grid-column: 6 / -1;
    grid-row: 1 / 4;
    align-self: center;
  `;
  const EventTitle = styled.div`
    /* background: pink; */
    grid-column: 1 / -1;
    font-weight: 200;
    font-size: 19px;
    grid-row: 3 / 5;
    align-self: center;
  `;
  const EventDate = styled.div`
    /* background: yellow; */
    grid-column: 1 / 4;
    grid-row: 5 / -1;
    align-self: end;
  `;
  const EventAction = styled.div`
    /* background: purple; */
    grid-column: 5 / -1;
    grid-row: 5 / -1;
    align-self: end;
  `;


export default class actionscard extends Component {
  render() {
    const { name, date, activity, showed, invited, progress } = this.props
    return (
      <Outerbox>
          <InnerBox></InnerBox>
          <TotalPeople>
            <img className="icon" src={people} alt="MyEffect people" />
            <div className="numbers">
              {showed} / {invited} 
            </div>
          </TotalPeople>
          <Progress progress={progress}/>
          <RewardCoin>6</RewardCoin>
          <EventTitle>{name}</EventTitle>
          <EventDate>{date}</EventDate>
          <EventAction>{activity}</EventAction>
      </Outerbox>
    )
  }
}
