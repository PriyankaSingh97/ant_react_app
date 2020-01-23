import React from "react";
import { Button } from 'antd';
// import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

// THis component expects onClick function as a prop
const ButtonComponent = (props) => {
  let {label="Button", className="", icon="", iconPos="", type="", disabled="", tooltip="", tooltipOptions={}, handleOnClick} = props;
  
  return (<Button label={label} className={className} disabled={disabled} icon={icon} iconPos={iconPos || "left"} tooltip={tooltip} tooltipOptions={tooltipOptions} onClick={handleOnClick } type={type} data-test="button-component"/>)
}
ButtonComponent.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconPos: PropTypes.string,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
  tooltipOptions: PropTypes.object,
  handleOnClick: PropTypes.func,
}

export default ButtonComponent;

