import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ShoppingCart } from "lucide-react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: "string",
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: "Buy now!",
  },
  render: (args) => (
    <>
      <Button {...args} />
    </>
  ),
};

export const withIcon: StoryObj = {
  args: {
    size: "sm",
    children: "Buy now!",
    icon: <ShoppingCart />,
  },
  render: (args) => (
    <>
      <Button {...args} />
    </>
  ),
};
