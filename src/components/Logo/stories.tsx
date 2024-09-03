import { Args, Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

export const Default: StoryObj = {
  args: {
    color: "black",
    size: "large",
    hideOnMobile: true
  },

  render: (args: Args) => <Logo {...args} />
};
