import { describe, test } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('should render the component', async () => {
    render(<Home />);
    const btn = screen.getByTestId('count-btn');
    expect(btn.textContent).toEqual('0');
    fireEvent.click(btn);
    await waitFor(() => {
      expect(btn.textContent).toEqual('1');
    });
  });
});
