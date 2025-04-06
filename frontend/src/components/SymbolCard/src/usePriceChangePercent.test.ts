import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import usePriceChangePercent from './usePriceChangePercent';

describe('usePriceChangePercent', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns null initially', () => {
    const { result } = renderHook(() => usePriceChangePercent(100));

    expect(result.current).toBe(null);
  });

  it('returns null for undefined price', () => {
    const { result } = renderHook(() => usePriceChangePercent(undefined));

    expect(result.current).toBe(null);
  });

  it('calculates positive price change correctly', () => {
    const { result, rerender } = renderHook(({ price }) => usePriceChangePercent(price), {
      initialProps: { price: 100 }
    });
    rerender({ price: 120 });

    expect(result.current).toBe(20);
  });

  it('calculates negative price change correctly', () => {
    const { result, rerender } = renderHook(({ price }) => usePriceChangePercent(price), {
      initialProps: { price: 100 }
    });
    rerender({ price: 80 });

    expect(result.current).toBe(-20);
  });

  it('resets change percent to null after a second', () => {
    const { result, rerender } = renderHook(({ price }) => usePriceChangePercent(price), {
      initialProps: { price: 100 }
    });
    rerender({ price: 120 });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current).toBe(null);
  });

  it('handles multiple price updates', () => {
    const { result, rerender } = renderHook(({ price }) => usePriceChangePercent(price), {
      initialProps: { price: 100 }
    });

    rerender({ price: 120 });
    expect(result.current).toBe(20);

    rerender({ price: 90 });
    expect(result.current).toBe(-25);
  });

  it('cleans up timer on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');
    const { unmount, rerender } = renderHook(({ price }) => usePriceChangePercent(price), {
      initialProps: { price: 100 }
    });
    rerender({ price: 120 });

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
