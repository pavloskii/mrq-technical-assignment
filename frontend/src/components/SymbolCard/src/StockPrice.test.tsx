import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StockPrice from './StockPrice';

describe('StockPrice', () => {
  it('should render formatted price when price is provided', () => {
    render(<StockPrice price={100} />);

    const formattedPrice = screen.queryByText('$100');
    expect(formattedPrice).toBeInTheDocument();
  });

  it('should render "--" when price is undefined', () => {
    render(<StockPrice price={undefined} />);

    const undefinedPrice = screen.queryByText('--');
    expect(undefinedPrice).toBeInTheDocument();
  });
});
