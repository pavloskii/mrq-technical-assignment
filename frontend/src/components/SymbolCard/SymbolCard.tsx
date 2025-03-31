import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';
import usePriceChangeInfo from './src/usePriceChangeInfo';
import { clsx } from 'clsx';
import { memo, useCallback } from 'react';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName } = useAppSelector((state) => state.stocks.entities[id]);
  const changePercent = usePriceChangeInfo(price);

  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <div
      onClick={handleOnClick}
      className={clsx(
        'symbolCard',
        !!changePercent && changePercent > 0 && 'symbolCard--up',
        !!changePercent && changePercent < 0 && 'symbolCard--down',
        !!changePercent && Math.abs(changePercent) > 25 && 'symbolCard--shake'
      )}
    >
      <CardHeader companyId={id} trend={trend} />

      <div className="symbolCard__body">
        <StockPrice price={price} />

        <div>
          <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
          <ListItem Icon={<IndustryIcon />} label={companyName} spacing="space-between" />
          <ListItem Icon={<MarketCapIcon />} label={companyName} spacing="space-between" />
        </div>
      </div>
    </div>
  );
};

export default memo(SymbolCard);
