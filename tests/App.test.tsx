import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";

const router = createBrowserRouter(routes);


describe('App', () => {
  it('renders', async() => {
    const app = <RouterProvider router={router} />
    render(app);
    screen.debug();
  });
});
