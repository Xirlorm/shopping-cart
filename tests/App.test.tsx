import { screen, render } from "@testing-library/react";
import React from "react";
import App from '../src/App';
import { describe, expect, it } from "vitest";

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(/Shopping cart/i);
  })
});
