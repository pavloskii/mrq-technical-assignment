import { memo } from 'react';
import upTrendIconSrc from '@/assets/up.png';
import downTrendIconSrc from '@/assets/down.png';
import './trendMarker.css';

type TrendMarkerProps = {
  trend: 'UP' | 'DOWN' | null;
};

const TrendMarker = ({ trend }: TrendMarkerProps) => {
  if (trend === 'UP') {
    return <img className="trendIcon" src={upTrendIconSrc} alt="Up trend marker" />;
  }

  if (trend === 'DOWN') {
    return <img className="trendIcon" src={downTrendIconSrc} alt="Down trend marker" />;
  }

  return null;
};

export default memo(TrendMarker);
