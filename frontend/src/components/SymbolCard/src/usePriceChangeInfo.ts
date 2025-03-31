import { useEffect, useRef, useState } from 'react';

const usePriceChangePercent = (price: number | undefined) => {
  const previousPrice = useRef(price);
  const [changePercent, setChangePercent] = useState<number | null>(null);

  useEffect(() => {
    if (!!price && !!previousPrice.current && previousPrice.current !== price) {
      const changePercent = ((price - previousPrice.current) / previousPrice.current) * 100;
      setChangePercent(changePercent);

      const timer = setTimeout(() => setChangePercent(null), 1000);

      return () => clearTimeout(timer);
    }

    previousPrice.current = price;
  }, [price]);

  return changePercent;
};

export default usePriceChangePercent;
