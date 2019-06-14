import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import uuid from "uuid/v4";

 const Outerbox = styled.div`
  /* background: purple; */
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
  const InnerBox = styled.div`
    display: grid;
    grid-template-columns: 5px 150px;
  `;
  const NavItem = styled.div`
    a {
      color: white;
    }
  `;
 const NavIcon = styled.div`
  /* background: red; */
  height: 70px;
  width: 35px;
  img {
    height: 35px; 
  }
 `;
 const Title = styled.div`
  /* background: green; */
  margin-left: 40px;
  width: 100%; height: 70px;
 `;
 
class links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: uuid(), link: "feed", name: "Feed", icon: "../../static/images/navigation/icon-feed.svg" },
        { id: uuid(), link: "recognition", name: "Recognition", icon: "../../static/images/navigation/icon-recognition.svg" },
        { id: uuid(), link: "actions", name: "Actions", icon: "../../static/images/navigation/icon-actions.svg" },
        { id: uuid(), link: "members", name: "Members", icon: "../../static/images/navigation/icon-members.svg" },
        { id: uuid(), link: "mail", name: "Mail", icon: "../../static/images/navigation/icon-mail.svg" },
        { id: uuid(), link: "performance", name: "Performance", icon: "../../static/images/navigation/icon-performance.svg" },
        { id: uuid(), link: "settings", name: "Settings", icon: "../../static/images/navigation/icon-settings.svg" }
      ]
    }
  }
  renderNavItems() {
    return(
      <NavItem>
        {this.state.navItems.map(item => (
          <Link key={item.id} href={`/${item.link}`}>
            <a>
            <InnerBox>
              <NavIcon>
                <img src={item.icon} alt={item.name}/>
              </NavIcon>
              <Title>{item.name}</Title>
            </InnerBox>
            </a>
          </Link>
        ))}
      </NavItem>
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
