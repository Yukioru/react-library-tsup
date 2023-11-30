import React from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import { Button as BaseButton, type ButtonProps } from '$components/Button';

export default {
  title: 'Button',
} satisfies StoryDefault<ButtonProps>;

const Button: Story<ButtonProps> = args => <BaseButton {...args} />;

export const Default = Button.bind({});
Default.args = {
  type: 'button',
  children: 'Button',
};
