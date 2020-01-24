import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
import { Radio } from 'antd';

export class RadioButtonComponent extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
        {/* <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio> */}
      </Radio.Group>
    );
  }
}
