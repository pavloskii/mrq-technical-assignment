import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Stock = {
  symbol: string;
  companyName: string;
  industry: string;
  marketCap: number;
  exchange: 'NASDAQ' | 'NYSE';
  trend: 'UP' | 'DOWN' | null;
};

type HistoryEntry = {
  time: number;
  price: number;
};

type PriceHistory = {
  symbol: string | null;
  history: HistoryEntry[];
};

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/' }),
  endpoints: (builder) => ({
    getAllStocks: builder.query<Stock[], void>({
      query: () => `stocks`
    }),
    getPriceHistory: builder.query<PriceHistory, string>({
      query: (id) => `stock/history/${id}`
    })
  })
});

export const { useGetAllStocksQuery, useGetPriceHistoryQuery } = stocksApi;
export type { Stock };
