import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';
import { describe, it } from 'vitest';

describe('App', () => {
  it('renders', () => {
    render(<Home />);
    screen.debug();
  });
});