import React, { Component } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import ChallengesCard from './challengescard'

const Outerbox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
grid-gap: 25px 65px;
`;

export default class challengescards extends Component {
  static defaultProps = {
    challenges: [
      { id: uuid(), points: '1400', name: 'Let Youth be Youth', host: 'Miley Cyrus', desc: 'Refer a friend, let\' build a community of Leaders!', icon: '../../../static/images/profile/challenges/icon/ClimateAction.svg'},
      { id: uuid(), points: '1047', name: 'MyEffect Challenge', host: 'Kelly Lovell', desc: 'Promote and tech code!', icon: '../../../static/images/profile/challenges/icon/LifeBelowWater.svg'},
      { id: uuid(), points: '897', name: 'Code Movement', host: 'Karlie Kloss', desc: 'Coordinate with an inner city arts project with your friends. Safe creative spaces', icon: '../../../static/images/profile/challenges/icon/LifeonLand.svg'},
      { id: uuid(), points: '397', name: 'Code Movement2', host: 'Tom Tiddles', desc: 'Organize groups and collect as many canned and dry items to help support people affected by Huricane Tim!', icon: '../../../static/images/profile/challenges/icon/ClimateAction.svg'},
    ]
  }
  render() {
    return (
      <Outerbox>
        {this.props.challenges.map((challenge) => (
          <ChallengesCard key={challenge.id} {...challenge} />
          )
        )}
      </Outerbox>
    )
  }
}
