import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button } from 'antd';
import Label from '../Label';


class CheckBoxComponent extends Component {

  state = {
    checked: true,
    disabled: false,
  };



  onChange=(e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    let {checkboxObj = [], defaultValue, disable, selectedRequestCardRowData, checked =false} = this.props;

    // return (
    return (checkboxObj.length && checkboxObj.map((checkbox, index) => {
        // let checked;
        selectedRequestCardRowData && selectedRequestCardRowData.length && selectedRequestCardRowData.map((_item) => {
          if (this.props.edit) {
            checked = defaultValue
          } else {
            checked = _item[checkbox.value] || checkbox.checked
          }
        })
        // if (this.props.checked) {
        //     checked = this.props.checked
        // }

        // <div>
        return (

          <div>
        
          <Checkbox onChange={this.onChange}></Checkbox>
          <Label labelClass="p-checkbox-label" label={checkbox.label} />
          </div>

        )
      })
      ) || ""
  }
}
;
export default CheckBoxComponent;



