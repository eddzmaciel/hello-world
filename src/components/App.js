//  Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// Data
import Items from '../data/Menu';

class App extends Component {
  static propTypes={
    children: PropTypes.object.isRequired
  };

  
  render() {
    const{children}=this.props;
    return (
      <div className="App">
        <Header title="EddzMaciel" items={Items} />
        <Content body={children} />
        <Footer copyright="&copy; eddzmaciel 2018" />
      </div>
    );
  }
}

export default App;
