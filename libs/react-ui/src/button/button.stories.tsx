// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { Button } from './button.tsx';

type Story = StoryObj<typeof Button>;

export default {
  component: Button,
  args: {
    children: 'Button',
    size: 'sm',
    theme: 'primary',
    disabled: false,
  },
  argTypes: {
    theme: {
      // @ts-expect-error This is a bug in Storybook's types
      type: 'enum',
      options: ['primary', 'success'],
    },
  },
} satisfies Meta<typeof Button>;

const sizes = ['sm', 'md', 'lg'] as const;
const themes = ['primary', 'success'] as const;

//👇 Throws a type error it the args don't match the component props
export const Playground = {} satisfies Story;
export const Variants = {
  args: {
    size: undefined,
    theme: undefined,
  },
  render: args => (
    <div className="inline-grid grid-cols-4 gap-4 auto-rows-auto">
      <span />
      <span>primary</span>
      <span>success</span>
      <span>disabled</span>
      {sizes.map(size => (
        <Fragment key={size}>
          <span>{size}</span>
          {themes.map(theme => (
            <Button {...args} size={size} theme={theme} key={`${size}-${theme}`} />
          ))}
          <Button {...args} size={size} disabled key={`${size}-disabled`} />
        </Fragment>
      ))}
    </div>
  ),
} satisfies Story;
