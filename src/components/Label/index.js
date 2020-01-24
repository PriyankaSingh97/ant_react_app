import React from "react";
import PropTypes from 'prop-types';

const Label = (props) =>{
    let {  label="Label", labelClass=""} = props;
    return ( <label  className={labelClass} data-test="label-component">{label}</label>)
}

Label.propTypes={
    label: PropTypes.string,
    labelClass: PropTypes.string
}
export default Label;
