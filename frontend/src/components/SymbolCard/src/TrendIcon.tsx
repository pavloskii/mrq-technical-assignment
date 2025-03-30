import { memo } from 'react';
import upTrendIconSrc from '@/assets/up.png';
import downTrendIconSrc from '@/assets/down.png';
import './trendIcon.css';

type TrendIconProps = {
  trend: 'UP' | 'DOWN' | null;
};

const TrendIcon = ({ trend }: TrendIconProps) => {
  if (trend === 'UP') {
    return <img className="trendIcon" src={upTrendIconSrc} alt="Up trend" />;
  }

  if (trend === 'DOWN') {
    return <img className="trendIcon" src={downTrendIconSrc} alt="Down trend" />;
  }

  return null;
};

export default memo(TrendIcon);
