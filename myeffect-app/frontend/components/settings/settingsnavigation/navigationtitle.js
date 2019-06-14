import React, { Component } from 'react'
import styled from 'styled-components'

const settings = '../../static/images/settings/icon-settings.svg'

 const Outerbox = styled.div`
  /* background: red; */
  margin-left: 40px;
  display: flex;
  img {
    /* background: #000; */
    height: 75px;
  }
  div {
    color: ${props => props.theme.lightblue};
    line-height: 75px;
    font-size: 80px;
  }
 `;

export default class titlenavigation extends Component {
  render() {
    return (
      <Outerbox>
        <img src={settings} alt="settings"/>
        <div>Settings</div>
      </Outerbox>
    )
  }
}
