import { screen, render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from '../src/lib/routes'

const router = createBrowserRouter(routes)
const app = <RouterProvider router={router} />

describe('App', () => {
  it('Renders Header', () => {
    render(app);
    expect(screen.getByRole('banner', {name: 'header'})).toBeInTheDocument();
  })

  it('Renders Footer', () => {
    render(app);
    expect(screen.getByRole('contentinfo', {name: 'footer'})).toBeInTheDocument();
  })
});
