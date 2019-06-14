import React, { Component } from 'react'
import styled from 'styled-components'


 const Outerbox = styled.div`
  background: white;
  box-shadow: ${props => props.theme.bsblack};
  color: black;
  width: 120px;
  height: 200px;
  margin-top: 20px;
  padding: 5px;
  border-radius: 10px;
  img {
    margin-top: 14px;
  }
 `;

export default class infotile extends Component {
  render() {
    const { id, name, icon, hours, dollars, people} = this.props
    return (
      <Outerbox>
        <img src={icon} alt=""/>
        <p>
        {name}
        </p>
      </Outerbox>
    )
  }
}
