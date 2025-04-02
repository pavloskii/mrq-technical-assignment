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
      {stockSymbols.map((id) => {
        let scale = 1;
        if (activeSymbol !== null) {
          scale = id === activeSymbol ? 1.05 : 0.95;
        }

        return <SymbolCard price={prices[id]} key={id} id={id} scale={scale} />;
      })}
    </div>
  );
};

export default SymbolsGrid;
