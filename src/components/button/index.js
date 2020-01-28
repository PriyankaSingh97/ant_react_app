import React from "react";
import { Button } from 'antd';
// import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import "./button.css"

// This component expects onClick function as a prop
const ButtonComponent = (props) => {
  let {title="", className="", icon="", type="", disabled="", shape="",handleOnClick,size=""} = props;
  
  return (<Button  className={className} disabled={disabled} icon={icon} onClick={handleOnClick } type={type} data-test="button-component" size={size}>{title}</Button>)
}
ButtonComponent.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
  tooltipOptions: PropTypes.object,
  handleOnClick: PropTypes.func,
}

export default ButtonComponent;

