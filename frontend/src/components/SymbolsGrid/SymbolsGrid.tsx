import './symbolsGrid.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { useGetAllStocksQuery } from '@/services/stocks';

type SymbolsGridProps = {
  activeSymbol: null | string;
};

const SymbolsGrid = ({ activeSymbol }: SymbolsGridProps) => {
  const { data: stocks = [] } = useGetAllStocksQuery();
  const prices = useAppSelector((state) => state.prices);

  return (
    <div className="symbolsGrid">
      {stocks.map((stock) => (
        <SymbolCard
          key={stock.symbol}
          price={prices[stock.symbol]}
          stock={stock}
          activeSymbol={activeSymbol}
        />
      ))}
    </div>
  );
};

export default SymbolsGrid;
