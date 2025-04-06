import './symbolsGrid.css';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import SymbolCard from '../SymbolCard';
import { Scale } from '../SymbolCard/SymbolCard';

type SymbolsGridProps = {
  activeSymbol: null | string;
};

const SymbolsGrid = ({ activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();

  const getCardScale = useCallback(
    (symbol: string): Scale => {
      if (symbol === activeSymbol) return 'large';
      if (activeSymbol !== null) return 'small';
      return 'medium';
    },
    [activeSymbol]
  );

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid">
      {stockSymbols.map((id) => (
        <SymbolCard price={prices[id]} key={id} id={id} scale={getCardScale(id)} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
