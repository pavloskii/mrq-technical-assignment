import './symbolCard.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangePercent from './src/usePriceChangePercent';
import { memo, useCallback } from 'react';
import SymbolInfo from './src/SymbolInfo';
import { selectors as optionsSelectors, setActiveSymbol } from '@/store/dashboardOptionsSlice';
import combineClasses from '@/utils/combineClasses';
import { type Stock } from '@/services/stocks';

type SymbolCardProps = {
  stock: Stock;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ stock, price, activeSymbol }: SymbolCardProps) => {
  const dispatch = useAppDispatch();
  const { trend, companyName, industry, marketCap, symbol } = stock;
  const showCardInfo = useAppSelector(optionsSelectors.selectShowCardInfo);
  const changePercent = usePriceChangePercent(price);
  const isActive = activeSymbol === symbol;
  const isOtherActive = !isActive && activeSymbol !== null;
  const priceRecentlyChanged = changePercent !== null;

  const handleOnClick = useCallback(() => {
    dispatch(setActiveSymbol(symbol));
  }, [dispatch, symbol]);

  return (
    <div
      key={price}
      onClick={handleOnClick}
      className={combineClasses(
        'symbolCard',
        priceRecentlyChanged && changePercent > 0 && 'symbolCard--greenGlow',
        priceRecentlyChanged && changePercent < 0 && 'symbolCard--redGlow',
        !priceRecentlyChanged && isActive && 'symbolCard--blackGlow',
        priceRecentlyChanged && Math.abs(changePercent) > 25 && 'symbolCard--shake',
        isActive && 'symbolCard--grow',
        isOtherActive && 'symbolCard--shrink'
      )}
    >
      <CardHeader companyId={symbol} trend={trend} />

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
