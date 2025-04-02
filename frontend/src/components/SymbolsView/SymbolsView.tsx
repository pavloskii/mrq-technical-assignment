import './symbolsView.css';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import { useCallback, useState } from 'react';

const SymbolsView = () => {
  const [activeSymbol, setActiveSymbol] = useState<null | string>(null);

  const handleSymbolClick = useCallback((symbolId: string) => {
    setActiveSymbol((s) => (s === symbolId ? null : symbolId));
  }, []);

  return (
    <div className="symbolsView">
      <DesktopInfo />

      <div className="symbolsView__content">
        <SymbolsGrid onSymbolClick={handleSymbolClick} activeSymbol={activeSymbol} />

        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol} />
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
