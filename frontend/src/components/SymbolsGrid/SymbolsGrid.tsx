import './symbolsGrid.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { useGetAllStocksQuery } from '@/services/stocks';
import { useEffect } from 'react';

type SymbolsGridProps = {
  activeSymbol: null | string;
};

const SymbolsGrid = ({ activeSymbol }: SymbolsGridProps) => {
  const { data: stocks = [] } = useGetAllStocksQuery();
  const prices = useAppSelector((state) => state.prices);
  useEffect(() => console.log('Updated' + stocks[0]), [stocks]);
  return (
    <div className="symbolsGrid">
      {stocks.map((stock) => (
        <SymbolCard
          price={prices[stock.symbol]}
          key={stock.symbol}
          id={stock.symbol}
          activeSymbol={activeSymbol}
          companyName={stock.companyName}
          industry={stock.industry}
          marketCap={stock.marketCap}
          trend={stock.trend}
        />
      ))}
    </div>
  );
};

export default SymbolsGrid;
