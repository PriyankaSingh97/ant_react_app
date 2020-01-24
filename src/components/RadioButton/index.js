import React from 'react';

import { Radio } from 'antd';
import { Component } from 'react';
import Label from '../Label';


export class RadioButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: this.props.value || "",
    };

  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        radioValue: e.target.value,
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log("nextProps = ", nextProps)
    this.setState({
        radioValue: nextProps.value
    })
  }

  render() {

    let {radioBtnObj=[], error = "", disable=false, tooltip='', errorforPermanant="", value} = this.props;
    console.log(radioBtnObj, "radioBtnObj")

    if (this.state.value == "") {
      error = true
    }


    return (
      <React.Fragment>
        {
      radioBtnObj.length && radioBtnObj.map((radioBtn, index) => {
          {console.log("radioBtn = ",radioBtn)}
          {console.log("index = ",index)}

        return (<React.Fragment key={radioBtn.label + index}>
                        <div className="radio-btn-obj-label p-col-12 p-md-4" >
                            <Radio value={radioBtn.value || this.state.radioValue} name={radioBtn.groupName} onChange={this.onChange} checked=
          {this.state.radioValue === radioBtn.value}
          required={radioBtn.required} data-test="Radio-button" disabled={disable} tooltip={(radioBtn.tooltip) ? tooltip : ""} tooltipOptions={{
            position: 'bottom'
          }}/>
                           
                            <Label labelClass="p-radiobutton-label" label={radioBtn.label} />
                        </div >
                        { /* {error ? <div className="validation-error ">{this.props.errorforPermanant}</div> :""} */ }
                    </React.Fragment>)
      })

      // <Radio.Group onChange={this.onChange} value={this.state.value}>
      //     <Radio value={1}>Male</Radio>
      //     <Radio value={2}>Female</Radio>
      //     { /* <Radio value={3}>C</Radio>
      //     <Radio value={4}>D</Radio> */ }
      // </Radio.Group>
      }
      </React.Fragment>
      );
  }
}
