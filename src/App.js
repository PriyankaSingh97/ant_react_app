import React, { Component } from 'react';
import './App.css';
import { List } from './containers/List'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <React.Fragment>
      <List/>
     </React.Fragment>

      );
  }
}

export default App;


