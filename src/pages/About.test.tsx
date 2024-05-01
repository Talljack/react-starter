import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About component', () => {
  test('should render the component', () => {
    render(<About />)
    expect(screen.getByText(/About/i)).toBeDefined()
  })
})
