
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Input } from 'antd';



export class TextField extends Component {
  render() {
    let { textFieldData = {},  className = "", placeholder = '',disabled="",required="",requiredmessage,error} = this.props;
    console.log("props = ",this.props.textFieldData)

    return (
      <div className="example-input">
            <Input  type={textFieldData.type || "text"}
            placeholder={placeholder} required={required} disabled={disabled} />
          </div>

    )
  }

}

// ReactDOM.render(

//   document.getElementById('container'),
// );
