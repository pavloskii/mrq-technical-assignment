import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SymbolInfo from './SymbolInfo';

describe('SymbolInfo', () => {
  it('should render all icons', () => {
    const companyName = 'test company';
    const industry = 'test industry';
    const marketCap = 10;
    const expectedMarketCap = '$10';

    render(<SymbolInfo companyName={companyName} industry={industry} marketCap={marketCap} />);

    expect(screen.queryByText(companyName)).toBeInTheDocument();
    expect(screen.queryByText(industry)).toBeInTheDocument();
    expect(screen.queryByText(expectedMarketCap)).toBeInTheDocument();
  });
});
