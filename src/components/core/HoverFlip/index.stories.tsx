import React from "react";
import { Meta, Story } from "@storybook/react";

import { default as HoverFlipComponent, HoverFlipProps } from "./index";

export default {
  title: "Bestondesk/HoverFlip",
  component: HoverFlipComponent,
} as Meta;

const Template: Story<HoverFlipProps> = (args) => (
  <HoverFlipComponent {...args} />
);

export const HoverFlip = Template.bind({});
HoverFlip.args = {
  children: "Test",
  to: "#",
};
