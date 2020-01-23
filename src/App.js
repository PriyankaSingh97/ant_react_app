import React, { Component } from 'react';
import './App.css';
import { List } from './containers/List'
import CheckBoxComponent from "../src/components/checkbox/Index";
// import { Header_ } from "./components/Header"
import { SiderDemo } from "./components/Sider";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <React.Fragment>
        {/* <Header_ /> */}

      <List/>
      <CheckBoxComponent/>


     </React.Fragment>

      );
  }
}

export default App;


