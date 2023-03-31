import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('should render the component', () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeDefined();
  });
});
