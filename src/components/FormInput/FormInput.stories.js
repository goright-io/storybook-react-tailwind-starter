import React from "react"
import { storiesOf } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import FormInput from "./FormInput"

const defaultProps = {
  inputValue: "",
  size: "medium",
  inputRequired: false,
  placeholder: 'e.g. email@company.com',
  setInputValue: () => {},
}

const fillProps = {
  inputValue: "Walk dog",
  size: "medium",
  inputRequired: false,
  inputPlaceholder: "",
  setInputValue: () => {},
}

const design = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A46",
  },
}

storiesOf("FormInput", module)
.add("default", () => <FormInput {...defaultProps} /> , design)
.add("fill", () => <FormInput {...fillProps} />, design)
  

export default {
  title: "Input",
  component: FormInput,
  decorators: [withDesign],
}
