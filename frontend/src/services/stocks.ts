import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Stock = {
  symbol: string;
  companyName: string;
  industry: string;
  marketCap: number;
  exchange: 'NASDAQ' | 'NYSE';
  trend: 'UP' | 'DOWN' | null;
};

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/' }),
  endpoints: (builder) => ({
    getAllStocks: builder.query<Stock[], string>({
      query: () => `stocks`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllStocksQuery } = stocksApi;
