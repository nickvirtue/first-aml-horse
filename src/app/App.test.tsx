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

test('Renders Default Horse Names', async () => {
  render(<App />);
  let linkElement = await screen.findByText("Artax");
  expect(linkElement).toBeInTheDocument();
  linkElement = await screen.findByText("Thunderdash");
  expect(linkElement).toBeInTheDocument();
  linkElement = await screen.findByText("Potoooooooo");
  expect(linkElement).toBeInTheDocument();
  linkElement = await screen.findByText("Shorty");
  expect(linkElement).toBeInTheDocument();
});


