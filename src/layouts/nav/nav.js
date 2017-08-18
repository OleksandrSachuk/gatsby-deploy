import React, {Component} from 'react'
import Link from 'gatsby-link'
import {Nav, NavItem} from 'react-bootstrap'
import './style.css'

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      photos: false,
      contacts: false
    };

    this.handleClickNav = this.handleClickNav.bind(this);
  }

  handleClickNav(item) {
    if (item === 'home') {
      // this.setState(home: true);
    }
    const allStateItem = Object.keys(this.state);
    allStateItem.map(key => {
      if (this.state[key] && key === item) {
        return
      } else if (key === item) {
        this.setState({[key]: true});
      } else {
        this.setState({[key]: false});
      }
    });
  }

  render() {
    const {home, photos, contacts} = this.state;
    return (
      <div className="container">
        <Nav bsStyle="tabs">
          <Link
            to="/"
            className={home ? 'nav-link active': 'nav-link'}
            onClick={this.handleClickNav.bind(this, 'home')}
          >
            Home
          </Link>
          <Link
            to="/photos/"
            className={photos ? 'nav-link active': 'nav-link'}
            onClick={this.handleClickNav.bind(this, 'photos')}
          >
            Photos
          </Link>
          <Link
            to="/contacts/"
            className={contacts ? 'nav-link active': 'nav-link'}
            onClick={this.handleClickNav.bind(this, 'contacts')}
          >
            Contacts
          </Link>
        </Nav>
      </div>
    )
  }
}


