import './symbolCard.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangePercent from './src/usePriceChangePercent';
import { memo, useCallback } from 'react';
import SymbolInfo from './src/SymbolInfo';
import { selectors as optionsSelectors, setActiveSymbol } from '@/store/dashboardOptionsSlice';
import combineClasses from '@/utils/combineClasses';

type SymbolCardProps = {
  id: string;
  price: number;
  companyName: string;
  industry: string;
  marketCap: number;
  trend: 'UP' | 'DOWN' | null;
  activeSymbol: string | null;
};

const SymbolCard = ({
  id,
  price,
  activeSymbol,
  companyName,
  industry,
  marketCap,
  trend
}: SymbolCardProps) => {
  const dispatch = useAppDispatch();
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
        isActive && 'symbolCard--active',
        isOtherActive && 'symbolCard--shrink',
        priceRecentlyChanged && changePercent > 0 && 'symbolCard--priceUp',
        priceRecentlyChanged && changePercent < 0 && 'symbolCard--priceDown',
        priceRecentlyChanged && Math.abs(changePercent) > 25 && 'symbolCard--shake'
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
