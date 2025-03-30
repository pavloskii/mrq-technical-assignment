import { memo } from 'react';
import './stockPrice.css';
import formatSymbolPrice from './formatSymbolPrice';

type StockPriceProps = {
  price: number;
};

const StockPrice = ({ price }: StockPriceProps) => {
  return (
    <div className="stockPrice">
      <span className="stockPrice__label">PRICE:</span>
      <span className="stockPrice__value">{formatSymbolPrice(price)}</span>
    </div>
  );
};

export default memo(StockPrice);
