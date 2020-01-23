import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import {Header_} from "../components/Header";
import {SiderDemo} from "../components/Sider";
import {DropdownComponent} from "../components/Dropdown"






const {Header, Sider, Content,Footer} = Layout;

// const {  Sider, Content } = Layout;
export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
    <React.Fragment>
       <Layout>
       <Layout>
      

         <Header_/>
         <Content style={{margin: '0 8px',background: '#fff' }}>
         <DropdownComponent/>




          </Content>
         <SiderDemo/>
        


         
           <Footer style={{textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
         </Layout>
         </Layout>

    </React.Fragment>
      );
  }
}

export default List;