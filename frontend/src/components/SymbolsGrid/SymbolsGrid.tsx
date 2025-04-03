import './symbolsGrid.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import SymbolCard from '../SymbolCard';

type SymbolsGridProps = {
  activeSymbol: null | string;
};

const SymbolsGrid = ({ activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid">
      {stockSymbols.map((id) => (
        <SymbolCard price={prices[id]} key={id} id={id} activeSymbol={activeSymbol} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
