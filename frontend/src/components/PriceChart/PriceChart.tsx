import './priceChart.css';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Loading from '@/components/Loading';
import { useGetPriceHistoryQuery } from '@/services/stocks';
import { skipToken } from '@reduxjs/toolkit/dist/query';

type PriceChartProps = {
  symbolId: string | null;
};

const PriceChart = ({ symbolId }: PriceChartProps) => {
  const { data: priceHistory, error, isFetching } = useGetPriceHistoryQuery(symbolId ?? skipToken);
  const data = priceHistory?.history || [];
  const symbolInfo = priceHistory?.symbol || [];

  if (isFetching && symbolId !== null)
    return (
      <div className="priceChart">
        <Loading />
      </div>
    );
  if (error) return <div className="priceChart">Failed to get price history!</div>;
  if (!symbolId) return <div className="priceChart">Select stock</div>;
  return (
    <div className="priceChart">
      <div>{symbolInfo}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.map((e) => ({ ...e, time: new Date(e.time).toLocaleTimeString() }))}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
