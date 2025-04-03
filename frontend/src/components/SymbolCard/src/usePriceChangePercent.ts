import { useEffect, useRef, useState } from 'react';

const usePriceChangePercent = (price: number | undefined) => {
  const previousPrice = useRef<number | null>(null);
  const [changePercent, setChangePercent] = useState<number | null>(null);

  useEffect(() => {
    if (price === undefined) {
      return;
    }

    if (previousPrice.current === null) {
      previousPrice.current = price;
      return;
    }

    const change = ((price - previousPrice.current) / previousPrice.current) * 100;
    setChangePercent(change);
    previousPrice.current = price;

    const timer = setTimeout(() => setChangePercent(null), 1000);
    return () => clearTimeout(timer);
  }, [price]);

  return changePercent;
};

export default usePriceChangePercent;
