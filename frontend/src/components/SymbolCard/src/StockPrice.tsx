import './stockPrice.css';
import { memo } from 'react';
import formatPrice from '@/utils/formatPrice';

type StockPriceProps = {
  price: number | undefined;
};

const StockPrice = ({ price }: StockPriceProps) => {
  return (
    <div className="stockPrice">
      <span className="stockPrice__label">PRICE:</span>
      <span className="stockPrice__value">{price ? formatPrice(price) : '--'}</span>
    </div>
  );
};

export default memo(StockPrice);
