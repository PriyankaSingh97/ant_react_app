import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ButtonComponent from "../button"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class ContentComponent extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
       
        <Layout>
       
          <Content style={{ margin: '0 8px' ,background: '#fff'}}>
          <ButtonComponent label="button"/>
            {/* <div style={{ padding: 15, background: '#fff', minHeight: 600 }}>Bill is a cat.</div> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
