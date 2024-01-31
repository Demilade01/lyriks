import { createApi, fetchBaseQuery } from '@redux/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: () => {
      headers.set('X-RapidAPI-Key', 'KJwZZIJSFimshuivMSVGaiYzKRomp15f2vKjsnK4bKzuUzVLzA');

      return headers;
    },
  }),
  endpoints: (bullets) => ({
    getTopCharts: MdQueryBuilder.query({ query: () => '/charts/world'})
  })
})

export const {
  useGetTopChartsQuery
} = shazamCoreApi;