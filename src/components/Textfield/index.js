
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Input } from 'antd';



export class TextField extends Component {
  render() {
    return (
      <div className="example-input">
            {/* <Input size="large" placeholder="large size" /> */}
            <Input placeholder="default size" />
            {/* <Input size="small" placeholder="small size" /> */}
          </div>

    )
  }

}

// ReactDOM.render(

//   document.getElementById('container'),
// );
