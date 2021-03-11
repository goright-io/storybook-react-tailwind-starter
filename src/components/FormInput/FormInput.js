import React from 'react'
import PropTypes from "prop-types"


export default function FormInput({size, inputValue, inputPlaceholder, inputRequired, ...props}) {
  const mode = inputRequired ? "bg-red-500" : "bg-white"
  const base = `p-4 text-base border border-blue-500 ${mode}`
  return (
    <input
      type="text"
      value={inputValue}
      className={base}
      required={inputRequired ? true : false}
      placeholder={inputPlaceholder ? inputPlaceholder : ""}
    />
  )
}
FormInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  inputRequired: PropTypes.bool,
  onClick: PropTypes.func,
}

FormInput.defaultProps = {
  size: "medium",
  onClick: undefined,
}
