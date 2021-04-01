import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado - General',
    description: 'TypeScript, ReactJS, NextJS e Styled Components - General'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  description: 'TypeScript, ReactJS, NextJS e Styled Components - Basic'
}

export const Primary: Story = (args) => <Main {...args} />
Primary.args = {
  description: 'TypeScript, ReactJS, NextJS e Styled Components - Primary'
}
