// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes={
    title:  PropTypes.string.isRequired,
    items:  PropTypes.array.isRequired
  };
  render() {
    console.log(this.props);
    const { title,items } = this.props;
    /*const title=this.props.title;
    const items=this.props.items;*/
    return (
      <div className="Header">
        <div className="Logo">
            <img src={logo} alt="logo" />
            <h1>{title}</h1>
            <ul className="Menu">
              {items && items.map((item,key)=>  <li key={key}>{item.title}</li>)}
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
