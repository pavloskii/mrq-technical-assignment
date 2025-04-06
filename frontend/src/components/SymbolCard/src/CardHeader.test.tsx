import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardHeader from './CardHeader';

describe('CardHeader', () => {
  test('renders the company ID', () => {
    render(<CardHeader companyId="AAPL" trend="UP" />);

    const companyIdElement = screen.queryByText(/AAPL/i);
    expect(companyIdElement).toBeInTheDocument();
  });
});
