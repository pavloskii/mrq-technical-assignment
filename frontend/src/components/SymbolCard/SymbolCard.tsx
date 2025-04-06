import './symbolCard.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangePercent from './src/usePriceChangePercent';
import { memo, useCallback } from 'react';
import SymbolInfo from './src/SymbolInfo';
import { selectors as optionsSelectors, setActiveSymbol } from '@/store/dashboardOptionsSlice';
import combineClasses from '@/utils/combineClasses';
import { Stock } from '@/services/stocks';

type Scale = 'small' | 'medium' | 'large';

type SymbolCardProps = {
  price: number;
  stock: Exclude<Stock, 'exchange'>;
  scale?: Scale;
};

const SymbolCard = ({ price, stock, scale = 'medium' }: SymbolCardProps) => {
  const { symbol: id, companyName, industry, marketCap, trend } = stock;
  const dispatch = useAppDispatch();
  const showCardInfo = useAppSelector(optionsSelectors.selectShowCardInfo);
  const changePercent = usePriceChangePercent(price);
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
        `symbolCard--${scale}`,
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
export type { Scale };
