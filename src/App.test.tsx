import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './app/App';
import userEvent from "@testing-library/user-event";

test('Renders App Title', async () => {
  render(<App />);
  expect(await screen.findByText("First AML Horse")).toBeInTheDocument();
});

test('Renders List Page Title', async () => {
  render(<App />);
  expect(await screen.findByText("Horses List")).toBeInTheDocument();
});

test('Renders Default Horse Names', async () => {
  render(<App />);
  expect(await screen.findByText("Artax")).toBeInTheDocument();
  expect(await screen.findByText("Thunderdash")).toBeInTheDocument();
  expect(await screen.findByText("Potoooooooo")).toBeInTheDocument();
  expect(await screen.findByText("Shorty")).toBeInTheDocument();
});



test('Renders Horse Details', async () => {
  render(<App />);
  userEvent.click(await screen.findByText("Artax"))
  expect(await screen.findByText("Artax")).toBeInTheDocument();
  expect(await screen.findByText("Carrots")).toBeInTheDocument();
});


