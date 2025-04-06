import { memo } from 'react';
import './cardHeader.css';
import TrendMarker from './TrendMarker';

type CardHeaderProps = {
  companyId: string;
  trend: 'UP' | 'DOWN' | null;
};

const CardHeader = ({ companyId, trend }: CardHeaderProps) => {
  return (
    <div className="cardHeader">
      {companyId}
      <TrendMarker trend={trend} />
    </div>
  );
};

export default memo(CardHeader);
