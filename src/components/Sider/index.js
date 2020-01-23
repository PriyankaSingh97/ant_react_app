import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import data from "./../../data/data.json"
import { element } from 'prop-types';
// import {ContentComponent} from "../content"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {

      console.log(data.sideMenu);
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          {/* {data.sideMenu.map((element,index)=>{console.log(element)
             return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             <Menu.Item key={element.key}>
               <Icon type={element.type} />
               <span>{element.label}</span>
        
             </Menu.Item>
             </Menu> })} */}


    {/* renderSubmenuItems(submenu){
    submenu.map((element,index)=>{
       
        <SubMenu
        key={element.key}
        title={
          <span>
            <Icon type={element.type} />
            <span>{element.labelName}</span>
          </span>
        }
      >
      </SubMenu>}) 
    })
   }
   
   map((element,index)=>{
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
         {element.submenu? renderSubmenuItems(element.submenu):null}
    <menu.item>
      <span>icon span</span>
      <div>{element.label}</div>

    </menu.item>
    </Menu>
    
   }) */}

{data.sideMenu.map((element,index)=>{
    return element.submenu ? element.submenu.map((element,index)=>{
       return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
       
           <SubMenu
           key={element.key}
           title={
             <span>
               <Icon type={element.type} />
               <span>{element.labelName}</span>
             </span>
           }
         >
            <Menu.Item key={element.key}>
               <Icon type={element.type} />
               <span>{element.label}</span>
        
             </Menu.Item>
         </SubMenu>
         </Menu>}) : <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
       <Menu.Item key={element.key}>
         <Icon type={element.type} />
         <span>{element.label}</span>
       </Menu.Item>
       </Menu> })
}


        </Sider>
       {/* <ContentComponent/> */}
      </Layout>
    );
  }
}

// renderSubmenuItems(submenuArr){
//     submenuArr.map(()=>{
//       code for submenu item
//     })
//    }
   
//    map.((item,in)=>{
//     <menu.item>
//       <span>icon span</span>
//       <div>{item.label}</div>
//       {item.submenu? renderSubmenuItems(item.submenu):null}
//     </menu.item>
    
//    })

