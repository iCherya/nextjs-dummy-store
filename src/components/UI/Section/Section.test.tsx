import { render, screen } from '@testing-library/react'

import Divider from '@/components/UI/Divider/Divider'
import Section from '@/components/UI/Section/Section'

jest.mock('@/components/UI/Divider/Divider', () => ({
  __esModule: true,
  default: jest.fn(() => 'DividerMock'),
}))

describe('Section', () => {
  it('should render children with Divider component', () => {
    const { container } = render(<Section>Children</Section>)

    expect(screen.getByText('Children')).toBeInTheDocument()

    expect(screen.getByText('DividerMock')).toBeInTheDocument()
    expect(Divider).toHaveBeenCalledTimes(1)

    expect(container).toMatchSnapshot()
  })
})
