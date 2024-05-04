import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a button with correct text', () => {
  render(<App />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});