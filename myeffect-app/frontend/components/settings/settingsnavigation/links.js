import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import uuid from "uuid/v4";

 const Outerbox = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-left: 35px;
  a {
    color: ${props => props.theme.grey};
  }
 `;

 const Innerbox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 9px;
  `;
 const NavItem = styled.div`
  background: #fff;
  height: 30px;
  border-radius: 12px 12px 0px 0px;
  .active {
    color: ${props => props.theme.lightblue};
    box-shadow: ${props => props.theme.bsblack};
  }
  `;
 const Title = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  input:active, input:focus{
  color: ${props => props.theme.grey};
    box-shadow: ${props => props.theme.bsblack};
  }
 `;
 
class links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: uuid(), name: "Edit Profile", isActive: true},
        { id: uuid(), name: "Resource Uploads", isActive: false },
        { id: uuid(), name: "Impact Reporting", isActive: false },
        { id: uuid(), name: "Theme Customization", isActive: false },
        { id: uuid(), name: "Account Plan", isActive: false },
        { id: uuid(), name: "Verification", isActive: false }
      ]
    }
  }


  renderNavItems() {
    return(
      <Innerbox>
        {this.state.navItems.map(item => (
          <NavItem key={item.id}  style={{ width: `${item.name.length * 10}px`, boxShadow: `${item.isActive ? "0 -7px 8px 0 rgba(0, 0, 0, 0.1), 0 -6px 40px 0 rgba(0, 0, 0, 0.1)" : ""}` }}>
            <Link  href={`/${item.link}`}>
              <a style={{color: `${!item.isActive ? "grey" : "#00B8F1"}` }}>
                <Title>{item.name}</Title>
              </a>
            </Link>
          </NavItem>
        ))}
      </Innerbox>
    )
  }
  render() {
    return (
      <Outerbox>
        {this.renderNavItems()}
      </Outerbox>
     )
   }
 }

export default links
