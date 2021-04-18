import { Story, Meta } from '@storybook/react/types-6-0'
import Teste from './Teste'

export default {
  title: 'Teste',
  component: Teste
} as Meta

export const Basic: Story = (args) => <Teste {...args} />
