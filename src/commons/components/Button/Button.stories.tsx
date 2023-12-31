import Button from '.'

export default {
  name: 'Button',
  component: Button,
  tags: ['autodocs'],

  args: {
    color: 'red',
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Specifies the background color of our button',
    },
    color: {
      control: 'color',
      description: 'Specifies the color of the text',
      defaultValue: {
        summary: 'green',
      },
    },

    label: {
      control: 'text',
    },
  },
}

export const Primary = {
  args: {
    label: 'Primary',
    size: 'large',
    // variant: 'danger',
  },
}

export const Secondary = {
  args: {
    label: 'Secondary',
    size: 'large',
    // variant: 'danger',
  },
}

export const Tertiary = {
  args: {
    label: 'Tertiary Button',
    size: 'large',
    // variant: 'danger',
  },
}
