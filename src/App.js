import React, { Component } from 'react';
import './App.css';
import { List } from './containers/List'
import CheckBoxComponent from "../src/components/checkbox/Index";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <React.Fragment>
      <List/>
      <CheckBoxComponent/>


     </React.Fragment>

      );
  }
}

export default App;


