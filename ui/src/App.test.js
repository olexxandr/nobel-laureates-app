import { render, screen } from '@testing-library/react';
import App_copy from './App';

test('renders learn react link', () => {
  render(<App_copy />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
