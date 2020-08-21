import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('testing', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Debt Repayment Planner/i);
  expect(linkElement).toBeInTheDocument();
});
