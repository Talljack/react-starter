import { describe, test } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from './Home'

describe('Home component', () => {
  test('should render the component', async () => {
    render(<Home />)
    const btn = screen.getByTestId('count-btn')
    expect(btn.innerHTML).contains('0')
    fireEvent.click(btn)
    await waitFor(() => {
      expect(btn.innerHTML).contains('1')
    })
  })
})
