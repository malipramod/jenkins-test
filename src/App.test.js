import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders FirstName and LastName', () => {
  const props = {
    fname: 'Pramod',
    lname: 'Mali',
    format: 'fl'
  }
  render(<App {...props} />);
  const value = screen.getByTestId('fl').textContent;
  expect(value).toBe('Pramod Mali');
});

test('renders LastName and FirstName', () => {
  const props = {
    fname: 'Pramod',
    lname: 'Mali',
    format: 'lf'
  }
  render(<App {...props} />);
  const value = screen.getByTestId('lf').textContent;
  expect(value).toBe('Mali Pramod');
});

test('renders default', () => {
  const props = {
    fname: 'Pramod',
    lname: 'Mali',
    format: 'default'
  }
  render(<App {...props} />);
  const value = screen.getByTestId('default').textContent;
  expect(value).toBe('Pramod Mali');
});

test('Change text to search bar',()=>{
  const props = {
    fname: 'Pramod',
    lname: 'Mali',
    format: 'default'
  }
  render(<App {...props} />);
  const button = screen.getByRole('button');
  fireEvent.click(button)
})
