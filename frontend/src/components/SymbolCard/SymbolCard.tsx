import './symbolCard.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangeInfo from './src/usePriceChangeInfo';
import { clsx } from 'clsx';
import { memo, useCallback } from 'react';
import SymbolInfo from './src/SymbolInfo';
import { selectors, setActiveSymbol } from '@/store/dashboardOptionsSlice';

type SymbolCardProps = {
  id: string;
  price: number;
  scale: number;
};

const SymbolCard = ({ id, price, scale }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const dispatch = useAppDispatch();
  const showCardInfo = useAppSelector(selectors.selectShowCardInfo);
  const changePercent = usePriceChangeInfo(price);

  const handleOnClick = useCallback(() => {
    dispatch(setActiveSymbol(id));
  }, [dispatch, id]);

  return (
    <div
      onClick={handleOnClick}
      className={clsx(
        'symbolCard',
        !!changePercent && changePercent > 0 && 'symbolCard--up',
        !!changePercent && changePercent < 0 && 'symbolCard--down',
        !!changePercent && Math.abs(changePercent) > 25 && 'symbolCard--shake',
        scale > 1 && 'symbolCard--active'
      )}
      style={{ transform: `scale(${scale})` }}
    >
      <CardHeader companyId={id} trend={trend} />

      <div className="symbolCard__body">
        <StockPrice price={price} />

        {showCardInfo && (
          <SymbolInfo companyName={companyName} industry={industry} marketCap={marketCap} />
        )}
      </div>
    </div>
  );
};

export default memo(SymbolCard);
