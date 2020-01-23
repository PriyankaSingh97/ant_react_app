import React from "react";
import { Button } from 'antd';
// import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

// THis component expects onClick function as a prop
const ButtonComponent = (props) => {
  let {title="Button", className="", icon="", type="", disabled="", shape="",handleOnClick} = props;
  
  return (<Button title={title} className={className} disabled={disabled} icon={icon} iconPos={iconPos || "left"} tooltip={tooltip} tooltipOptions={tooltipOptions} onClick={handleOnClick } type={type} data-test="button-component"/>)
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

