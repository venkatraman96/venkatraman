import React, { Component } from 'react';

import Header from './Header.js'
import Experience from './Experience.js';
import Setting from './Setting.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Experience/>
        <Setting/>
      </div>
    );
  }
}

export default App;
