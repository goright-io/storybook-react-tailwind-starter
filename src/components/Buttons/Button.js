import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */

const BASE_BUTTON =
  "rounded outline-none shadow font-normal"
const BUTTON_PRIMARY = `${BASE_BUTTON} bg-black border border-black text-white`
const BUTTON_SECONDARY = `${BASE_BUTTON} border border-black text-black`


export const Button = ({ primary,  size, label, ...props }) => {
  const mode = primary ? BUTTON_PRIMARY : BUTTON_SECONDARY
  let buttonSizes = ""
  if (size === "small") {
    buttonSizes = `${mode} py-1 px-4 text-sm`
  }else if (size === "medium") {
    buttonSizes = `${mode} py-2 px-8 text-base`
  } else if (size === "large") {
    buttonSizes = `${mode} py-3 px-12 text-lg`
  } 

  const buttonClasses = buttonSizes


  return (
    <button type="button" className={buttonClasses} {...props}>
      {label}
    </button>
  )
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
