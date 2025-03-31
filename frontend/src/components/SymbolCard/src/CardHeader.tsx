import { memo } from 'react';
import './cardHeader.css';
import TrendIcon from './TrendIcon';

type CardHeaderProps = {
  companyId: string;
  trend: 'UP' | 'DOWN' | null;
};

const CardHeader = ({ companyId, trend }: CardHeaderProps) => {
  return (
    <div className="cardHeader">
      {companyId}
      <TrendIcon trend={trend} />
    </div>
  );
};

export default memo(CardHeader);
