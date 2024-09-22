import { screen, render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from '../src/lib/routes'
import userEvent from "@testing-library/user-event";

const router = createBrowserRouter(routes)
const app = <RouterProvider router={router} />

beforeEach(() => render(app));

// Header and Footer rendering tests
describe('Header and footer renders', () => {
  it('Renders Header', () => {
    const header = screen.getByRole('banner', {name: 'header'});
    expect(header).toBeInTheDocument();
  })

  it('Renders Footer', () => {
    const footer = screen.getByRole('contentinfo', {name: 'footer'})
    expect(footer).toBeInTheDocument();
  })
});


// Header navigation tests
describe("Header navigation", () => {
  it('Clicking Shop icon in header loads Shop page', async () => {
    const user = userEvent.setup();
    const shopIcon = screen.getByRole('link', {name: 'shop'});
    await user.click(shopIcon);
    expect(screen.getByRole('main')).toHaveClass('shop');
  })

  it('Clicking Cart icon in header loads Cart page', async () => {
    const user = userEvent.setup();
    const cartIcon = screen.getByRole('link', {name: 'cart'});
    await user.click(cartIcon);
    expect(screen.getByRole('main')).toHaveClass('cart');
  })

  it('Clicking Home icon in header loads Home page', async () => {
    const user = userEvent.setup();
    const homeIcon = screen.getByRole('link', {name: 'home'});
    await user.click(homeIcon);
    expect(screen.getByRole('main')).toHaveClass('home');
  })
})
