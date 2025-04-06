import './symbolsGrid.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { useGetAllStocksQuery } from '@/services/stocks';
import { useCallback } from 'react';
import { Scale } from '../SymbolCard/SymbolCard';

type SymbolsGridProps = {
  activeSymbol: null | string;
};

const SymbolsGrid = ({ activeSymbol }: SymbolsGridProps) => {
  const { data: stocks = [] } = useGetAllStocksQuery();
  const prices = useAppSelector((state) => state.prices);

  const getCardScale = useCallback(
    (symbol: string): Scale => {
      if (symbol === activeSymbol) return 'large';
      if (activeSymbol !== null) return 'small';
      return 'medium';
    },
    [activeSymbol]
  );

  return (
    <div className="symbolsGrid">
      {stocks.map((stock) => (
        <SymbolCard
          price={prices[stock.symbol]}
          key={stock.symbol}
          stock={stock}
          scale={getCardScale(stock.symbol)}
        />
      ))}
    </div>
  );
};

export default SymbolsGrid;
