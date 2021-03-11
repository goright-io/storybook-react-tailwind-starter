import React from 'react';
import { withDesign } from "storybook-addon-designs";
import { Button } from './Button';

export default {
  title: "Button",
  component: Button,
  decorators: [withDesign],
}


const Template = (args) => <Button {...args} /> 

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4",
  },
}

Secondary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4",
  },
}

Small.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4",
  },
}

Large.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4",
  },
}
