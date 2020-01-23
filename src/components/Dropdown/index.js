
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Dropdown, Icon } from 'antd';


 export class DropdownComponent extends Component {

  render() {
    const menu = (
     <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer">
                       Home              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" >
                     Campus              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer">
                      Hostel              </a>
            </Menu.Item>
    </Menu>
        );
        
        
    return (
        <Dropdown overlay={menu}><a className="ant-dropdown-link" href="#"> Hover me <Icon type="down" /></a></Dropdown>
    )
  }

}
