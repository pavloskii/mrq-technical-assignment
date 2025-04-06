import './symbolsView.css';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import { useAppSelector } from '@/hooks/redux';
import { selectors } from '@/store/dashboardOptionsSlice';

const SymbolsView = () => {
  const activeSymbol = useAppSelector(selectors.selectActiveSymbol);

  return (
    <div className="symbolsView">
      <DesktopInfo />

      <div className="symbolsView__content">
        <SymbolsGrid activeSymbol={activeSymbol} />

        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol} />
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
