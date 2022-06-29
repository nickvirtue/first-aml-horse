import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App Title', async () => {
  render(<App />);
  const linkElement = await screen.findByText("First AML Horse");
  expect(linkElement).toBeInTheDocument();
});

test('Renders List Page Title', async () => {
  render(<App />);
  const linkElement = await screen.findByText("Horses List");
  expect(linkElement).toBeInTheDocument();
});


