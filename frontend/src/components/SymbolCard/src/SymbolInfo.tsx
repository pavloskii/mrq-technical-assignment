import { memo } from 'react';
import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import formatPrice from '@/utils/formatPrice';

type SymbolInfoProps = {
  companyName: string;
  industry: string;
  marketCap: number;
};

const SymbolInfo = ({ companyName, industry, marketCap }: SymbolInfoProps) => {
  return (
    <div>
      <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
      <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
      <ListItem Icon={<MarketCapIcon />} label={formatPrice(marketCap)} spacing="space-between" />
    </div>
  );
};

export default memo(SymbolInfo);
