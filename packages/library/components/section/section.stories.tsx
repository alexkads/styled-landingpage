import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Section } from ".";

export default {
  title: "Section",
  component: Section,
} as Meta;

const Template: Story<ComponentProps<typeof Section>> = args => (
  <Section {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};
