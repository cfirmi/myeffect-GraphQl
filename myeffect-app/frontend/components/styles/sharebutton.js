import React, { Component } from 'react'
import styled from 'styled-components'

 const Button = styled.button`
  background: ${props => props.theme.lightblue};
  width: 90px; height: 34px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 200;
  grid-row-end: 1;
  margin-top: 50px;
  border: none;
  color: white;
  .navigation {
    background: red;
  }
 `;



export default class sharebutton extends Component {

  handleClick = (evt) => {
    console.log("hello", evt)
  }
  render() {
    return (
      <Button onClick={this.handleClick}>
        Share
      </Button>
    )
  }
}
