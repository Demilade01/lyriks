import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/charts/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '54839da39emshc17dba8def25bf6p1f5ae5jsn9907c71db6bf');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({ query: () => '/track'})
  })
})

export const {
  useGetTopTracksQuery
} = shazamApi;