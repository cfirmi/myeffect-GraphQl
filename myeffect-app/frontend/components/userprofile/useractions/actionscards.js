import React, { Component } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import ActionsCard from './actionscard'


 const Outerbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 25px 65px;
 `;
export default class actionscards extends Component {
  static defaultProps = {
    cards: [
      { id: uuid(), showed: '27', invited: '55', name: 'Let Youth Be Youth', activity: 'volunteering', progress: '100', date: 'Sept 17, 2019'},
      { id: uuid(), showed: '47', invited: '105', name: 'Jazz Festival', activity: 'volunteering', progress: '25', date: 'Sept 27, 2019'},
      { id: uuid(), showed: '57', invited: '77', name: 'Volunteer', activity: 'volunteer', progress: '95', date: 'Sept 7, 2019'},

    ]
  }
  render() {
    return (
      <Outerbox>
        {this.props.cards.map((card) => (
          <ActionsCard key={card.id} {...card}/>
        ))}
      </Outerbox>
    )
  }
}
