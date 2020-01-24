
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
import { Input } from 'antd';

const { TextArea } = Input;




export class TeaxtArea extends Component{
    render(){
        return(
                <TextArea rows={4} />
        )
    }
} 

// ReactDOM.render(, document.getElementById('container'));
          