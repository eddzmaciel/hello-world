//  Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes={
    copyright:PropTypes.string
  };
  render() {
    const{copyright='&copy; React 2018'}=this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML= {{__html:copyright}} />
      </div>
      //we use this dangerouslySetInnerHTML for spetial chars html
    );
  }
}
export default Footer;
