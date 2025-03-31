import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangeInfo from './src/usePriceChangeInfo';
import { clsx } from 'clsx';
import { memo, useCallback } from 'react';
import SymbolInfo from './src/SymbolInfo';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const changePercent = usePriceChangeInfo(price);

  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <div
      onClick={handleOnClick}
      className={clsx(
        'symbolCard',
        !!changePercent && changePercent > 0 && 'symbolCard--up',
        !!changePercent && changePercent < 0 && 'symbolCard--down',
        !!changePercent && Math.abs(changePercent) > 25 && 'symbolCard--shake'
      )}
    >
      <CardHeader companyId={id} trend={trend} />

      <div className="symbolCard__body">
        <StockPrice price={price} />
        <SymbolInfo companyName={companyName} industry={industry} marketCap={marketCap} />
      </div>
    </div>
  );
};

export default memo(SymbolCard);
