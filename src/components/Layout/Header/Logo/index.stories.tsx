import React from "react";
import { Meta, Story } from "@storybook/react";

import { default as LogoComponent } from "./index";

export default {
  title: "Bestondesk/Logo",
  component: LogoComponent,
} as Meta;

const Template: Story = (args) => <LogoComponent />;

export const Logo = Template.bind({});
