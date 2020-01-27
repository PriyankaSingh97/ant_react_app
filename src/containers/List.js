import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import { Header_ } from "../components/Header";
import { SiderDemo } from "../components/Sider";
import { DropdownComponent } from "../components/Dropdown";
import {SearchComponent} from "../components/SearchBox";
import {RadioButtonComponent} from "../components/RadioButton"
import {TeaxtArea} from "../components/TextArea"
import {TextField} from "../components/Textfield"
// import {CheckBox} from "../components/checkbox"
import  CheckBoxComponent from "../components/checkbox"
import radioButtonscjeck1 from "../data/dummy.json"

const {Header, Sider, Content, Footer} = Layout;

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
    let {radioButtonscjeck=[],checkBoxButtons=[]}=radioButtonscjeck1



    return (
      <React.Fragment>
       <Layout>
         <div><Header_/></div>
         <div style={{display:"flex",width:"100%"}}>
         <div> <SiderDemo/></div>
          <div>
           <Layout>
          <Content style={{margin: '8px 8px 0 8px',background: '#fff',height:'500px',width:"1141px"}}>
          <DropdownComponent/>
          {/* <h1>fdzxg</h1>
          <h1>fdzxg</h1>
          <h1>fdzxg</h1>
          <h1>fdzxg</h1> */}

          <SearchComponent/>
          <RadioButtonComponent  radioBtnObj={radioButtonscjeck} />
         < TeaxtArea/>
         <TextField/>
         <CheckBoxComponent checkboxObj={checkBoxButtons}  />


          </Content>
          {/* <div style={{textAlign:"center"}}><Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer></div> */}
         </Layout>
       </div>
      </div>    
      </Layout>
      </React.Fragment>
      );
  }
}

export default List;