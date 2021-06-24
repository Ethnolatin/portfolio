import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/Frédéric Duchesner/i);
  expect(titleElement).toBeInTheDocument();
});
