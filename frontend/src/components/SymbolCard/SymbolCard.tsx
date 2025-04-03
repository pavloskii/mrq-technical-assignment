import './symbolCard.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangePercent from './src/usePriceChangePercent';
import { memo, useCallback } from 'react';
import SymbolInfo from './src/SymbolInfo';
import { selectors as optionsSelectors, setActiveSymbol } from '@/store/dashboardOptionsSlice';
import { selectors as stocksSelectors } from '@/store/stocksSlice';
import combineClasses from '@/utils/combineClasses';

type SymbolCardProps = {
  id: string;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, price, activeSymbol }: SymbolCardProps) => {
  const dispatch = useAppDispatch();
  const { trend, companyName, industry, marketCap } = useAppSelector(
    stocksSelectors.selectStockById(id)
  );
  const showCardInfo = useAppSelector(optionsSelectors.selectShowCardInfo);
  const changePercent = usePriceChangePercent(price);
  const isActive = activeSymbol === id;
  const isOtherActive = !isActive && activeSymbol !== null;
  const priceRecentlyChanged = changePercent !== null;

  const handleOnClick = useCallback(() => {
    dispatch(setActiveSymbol(id));
  }, [dispatch, id]);

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
