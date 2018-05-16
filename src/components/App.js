//  Dependencies
import React, { Component } from 'react';

//  Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// Data
import Items from '../data/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="EddzMaciel" items={Items} />
        <Content />
        <Footer copyright="&copy; eddzmaciel 2018" />
      </div>
    );
  }
}

export default App;
