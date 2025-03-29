import './cardHeader.css';
import upTrend from '@/assets/up.png';

type CardHeaderProps = {
  companyId: string;
  trend: 'UP' | 'DOWN' | null;
};

const CardHeader = ({ companyId, trend }: CardHeaderProps) => {
  return (
    <div className="cardHeader">
      {companyId} - {trend}
      <img className="cardHeader__trend-icon" src={upTrend} alt="Up trend" />
    </div>
  );
};

export default CardHeader;
