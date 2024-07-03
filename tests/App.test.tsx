import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import React from 'react';
import Home from '../src/pages/Home';

describe('App', () => {
  it('renders', () => {
    render(<Home />);
    screen.debug();
  });
});