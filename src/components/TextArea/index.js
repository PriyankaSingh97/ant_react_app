
import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;


// export class TeaxtArea extends Component{
//     render(){
//         return(
//                 <TextArea rows={4} />
//         )
//     }
// } 



export const TextAreaComponent = (props) => {
    let {title="", className="", icon="", type="", disabled="", shape="",handleOnClick,size=""} = props;
    
    return (<TextArea  className={className} disabled={disabled} icon={icon} onClick={handleOnClick } type={type} data-test="button-component" size={size}>{title}</TextArea>)
  }
  TextAreaComponent.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    handleOnClick: PropTypes.func,
  }