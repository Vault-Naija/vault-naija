import { Button } from '@chakra-ui/react'

export default {
  name: 'Button',
  component: Button,
  tags: ['autodocs'],

  args: {
    color: 'red',
  },
  argTypes: {
    colorScheme: {
      control: 'text',
      description: 'Specifies the background color of our button',
    },
    color: {
      control: 'color',
      description: 'Specifies the color of the text',
      defaultValue: {
        summary: 'green',
      },
    },
  },
}

export const Primary = {
  args: {
    children: 'Primary',
    size: 'sm',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary',
    size: 'md',
    variant: 'solid',
    colorScheme: 'teal',
  },
}

export const Tertiary = {
  args: {
    children: 'Tertiary Button',
    size: 'lg',
  },
}
