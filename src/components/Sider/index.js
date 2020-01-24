import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import data from "./../../data/data.json"
import { element } from 'prop-types';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({
      collapsed
    });
  };
  render() {
      let renderOption = (menuOption={}) =>{
        console.log("helooo",menuOption)
        if(menuOption.submenu){
            return <SubMenu 
              key={menuOption.index}
              title={
                <span>
                  <Icon type={menuOption.type}/>
                 {menuOption.label}
                </span>}
                >
                {
                    menuOption.submenu.map((element)=>{
                       return renderOption(element);
                    })
                }
            </SubMenu>
        }else{
            return  (
              <Menu.Item key={menuOption.key}>
              <Icon type={menuOption.type} />
              <span>{menuOption.label}</span>
              </Menu.Item>
            ) 
           
        }
    }
    console.log(data.sideMenu);

    return (
      <Layout style={{
        minHeight: '100vh'
      }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          { /* {data.sideMenu.map((element,index)=>{console.log(element)
             return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             <Menu.Item key={element.key}>
              <Icon type={element.type} />
              <span>{element.label}</span>
              </Menu.Item>
              </Menu> })} */ }
             
          <Menu>
            {data.sideMenu.map((element)=>{
              console.log(element)
            return renderOption(element)
            })}
            </Menu> 
        </Sider>
      </Layout>
      );
  }
}
