import { Meta, StoryObj } from "@storybook/react";
import MediaMatch from ".";

export default {
  title: "MediaMatch",
  component: MediaMatch,
} as Meta;

export const Desktop: StoryObj = {
  render: () => (
    <>
      <MediaMatch greaterThan="md">Only on Desktop</MediaMatch>
    </>
  ),
};

export const Mobile: StoryObj = {
  render: () => (
    <>
      <MediaMatch lessThan="md">Only on Mobile</MediaMatch>
    </>
  ),
};

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};
