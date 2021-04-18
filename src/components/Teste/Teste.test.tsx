import { render, screen } from '@testing-library/react'

import Teste from './Teste'

describe('<Teste />', () => {
  it('should render correctly - without snapshot', () => {
    render(<Teste />)

    expect(screen.getByRole('heading', { name: /Teste/i })).toBeInTheDocument()
  })
})
