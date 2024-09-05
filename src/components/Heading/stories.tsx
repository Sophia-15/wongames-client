import { Args, Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string",
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: "Most Populars",
  },

  render: (args: Args) => <Heading {...args}>{args.children}</Heading>,
};
