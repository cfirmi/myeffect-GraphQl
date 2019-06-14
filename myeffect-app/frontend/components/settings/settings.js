import React, { Component } from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavigationSettings from './settingsnavigation/navigationsettings'
import UserSettings from './settingsuser/usersettings'


const Outerbox = styled.div`
  grid-column: 2 / -1;
`;

export default class settings extends Component {
  render() {
    return (
      <Outerbox>
        <NavigationSettings />
        <UserSettings />
      </Outerbox>
    )
  }
}
