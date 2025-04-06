import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrendMarker from './TrendMarker';

describe('TrendMarker', () => {
  const queryPositiveTrendMarker = () => screen.queryByAltText(/up trend marker/i);
  const queryNegativeTrendMarker = () => screen.queryByAltText(/down trend marker/i);

  it('should render up trend marker when trend is UP', () => {
    render(<TrendMarker trend="UP" />);

    expect(queryPositiveTrendMarker()).toBeInTheDocument();
    expect(queryNegativeTrendMarker()).not.toBeInTheDocument();
  });

  it('should render down trend icon when trend is DOWN', () => {
    render(<TrendMarker trend="DOWN" />);

    expect(queryPositiveTrendMarker()).not.toBeInTheDocument();
    expect(queryNegativeTrendMarker()).toBeInTheDocument();
  });

  it('should not render anything when trend is null', () => {
    render(<TrendMarker trend={null} />);

    expect(queryPositiveTrendMarker()).not.toBeInTheDocument();
    expect(queryNegativeTrendMarker()).not.toBeInTheDocument();
  });
});
