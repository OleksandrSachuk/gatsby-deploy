import React, {Component} from 'react'
import Link from 'gatsby-link'
import {Nav, NavItem} from 'react-bootstrap'
import './style.css'

export default class Navigation  extends Component{
  constructor(props){
    super(props);

    this.state = {
      activeKey: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }

  render(){
    const {activeKey} = this.state;
    return (
      <div className="container">
        <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} title="Home">
            <Link
              to="/"
              style={{
                color: '#000080',
                textDecoration: 'none',
                padding: '10px 15px'
              }}
            >
              Home
            </Link>
          </NavItem>
          <NavItem eventKey={2} title="Photos">
            <Link
              to="/photos"
              style={{
                color: '#000080',
                textDecoration: 'none',
                padding: '10px 15px'
              }}
            >
              Photos
            </Link>
          </NavItem>
          <NavItem eventKey={3} title="Contacts">
            <Link
              to="/contacts/"
              style={{
                color: '#000080',
                textDecoration: 'none',
                padding: '10px 15px'
              }}
            >
              Contacts
            </Link>
          </NavItem>
        </Nav>
      </div>
    )
  }
}


