
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Dropdown} from 'antd';
 import { Menu} from 'antd';




export const DropdownComponent = (props) => {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              3rd menu item
            </a>
          </Menu.Item>
        </Menu>
      );

  let {title="",overlayClassName="",overlay="",placement="",visible="",onVisibleChange="",} = props;
  return (<Dropdown  overlay={menu} 
data-test="Dropdown-component"><span>Dropdown</span></Dropdown>)

}



// import React from "react";
// import { Dropdown} from 'antd';
// export class DropdownComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dropdownID: 0,
//             dropdownValue: this.props.defaultValue || "Select",
//             open: false,
//             label:"",
//             overlay:""
//         }
//     }

//     changeHandler = (event) => {
//         this.setState({
//             dropdownValue: event.value
//         })

//         if (this.props.onChange) { 
//             this.props.onChange(event, this.state.dropdownValue, this.state.dropdownID);
//         }
//     }
//     render() {
//         // console.log(this.props.defaultValue,"ParentLocationName");
//         // console.log(this.state.dropdownValue,"this.state.dropdownValue");
//         let { dropdownList = [], dropdownObj = {}, name = "",label="", required=false,error,overlay={}} = this.props;
//         return (<React.Fragment>
//             {/* <div className="create-role-inventory-input-fields">
//                 <div className="create-role-inventory-input-labels">
//                    {required? <span className="required-field">*</span>:""}
//                     <label>{label}</label>
//                 </div>
//                 <div className="drop-down-wrapper drop-down"> */}
//                 <Dropdown options={dropdownList} value={this.state.dropdownValue}
//                 option={this.state.label}
//                 placeholder={this.state.dropdownValue}
//                 onChange={this.changeHandler} autoWidth={false}  name={name} />
//                 {/* </div>
//             </div>
//             {error&&  <div className="validation-error">{this.props.errorMsg}</div>} */}
//         </React.Fragment>
//         )
//     }
// }
