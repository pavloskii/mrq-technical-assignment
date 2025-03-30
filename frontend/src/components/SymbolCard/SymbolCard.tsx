import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import CardHeader from './src/CardHeader';
import StockPrice from './src/StockPrice';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName } = useAppSelector((state) => state.stocks.entities[id]);

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className="symbolCard">
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

export default SymbolCard;
