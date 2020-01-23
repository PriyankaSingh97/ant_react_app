import React, { Component } from 'react';

// import React from 'react';
// import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css';
// import './index.css'; 
import { Checkbox ,Button } from 'antd';


class CheckBoxComponent extends Component {
    state = {
        checked: true,
        disabled: false,
      };
    


  onChange=(e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  
  render() {

    return (
    <div>
          {/* <Checkbox value={checkbox.value} id={checkbox.id} onChange={(e) => this.onChange(e, checkboxObj)} checked={checked} disabled={disable} /> */}
          <Checkbox onChange={this.onChange}>Checkbox</Checkbox>

    </div>
    )

  }

}
export default CheckBoxComponent;  


// ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, document.getElementById('container'));


// import React, { Component } from "react";
// import { Checkbox } from 'primereact/checkbox';
// import Label from '../Label';
// class CheckBoxComponent extends Component {

//     onChange = (event, checkboxObj) => {
//         this.props.onCheckBoxChange(event, checkboxObj);
//         if (this.props.handleInputChange) {
//             this.props.handleInputChange(event, checkboxObj);
//         }
//         // if (this.props.onChangeOfCheckbox) //function from parent component
//         // {
//         //     this.props.onChangeOfCheckbox()
//     }

//     // checkBoxValue(CreateDefaultValue,defaultValue){
//     //     if (defaultValue === ''){
//     //         return true
//     //     }else{
//     //         return defaultValue
//     //     }
//     // }

//     render() {
//         let { checkboxObj = [], defaultValue, disable, selectedRequestCardRowData, checked =false} = this.props;
//         return (checkboxObj.length && checkboxObj.map((checkbox, index) => {
//             // let checked;
//             selectedRequestCardRowData && selectedRequestCardRowData.length && selectedRequestCardRowData.map((_item) => {
//                 if (this.props.edit) {
//                     checked = defaultValue
//                 } else {
//                     checked = _item[checkbox.value] || checkbox.checked
//                 }
//             })
//             // if (this.props.checked) {
//             //     checked = this.props.checked
//             // }

//             return (<div className="p-col-12" key={checkbox.label + index}>
//                 <Checkbox value={checkbox.value} id={checkbox.id} onChange={(e) => this.onChange(e, checkboxObj)} checked={checked} disabled={disable} />
//                 <Label labelClass="p-checkbox-label" label={checkbox.label} />
//             </div>

//             )
//         })
//         ) || ""
//     }
// };
// export default CheckBoxComponent;  