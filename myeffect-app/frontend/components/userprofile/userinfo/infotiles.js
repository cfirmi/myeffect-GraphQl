import React, { Component } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import InfoTile from './infotile'

export default class infotiles extends Component {
  static defaultProps = {
    tiles: [
      { id: uuid(), name: "Volunteer Hours", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
      { id: uuid(), name: "Dollars Raised", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
      { id: uuid(), name: "Items Recycled", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
      { id: uuid(), name: "People Helped", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
      { id: uuid(), name: "Skills Developed", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
      { id: uuid(), name: "Lives Saved", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
      { id: uuid(), name: "Healthy Actions", hours: "112", icon: "../../static/images/profile/info/tiles/icon-clock.svg"},
    ]
  }
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <Outerbox>
        <div style={{width: '100px'}}></div>
        {this.props.tiles.map((tile) => (
          <InfoTile key={tile.id} {...tile} />
          ))}
      </Outerbox>
    )
  }
}

 const Outerbox = styled.div`
  grid-column: 1 /-1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  justify-content: center;
  overflow-y: hidden;
  scrollbar-width: none;
 `;