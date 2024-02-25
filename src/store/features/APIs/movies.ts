import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey = process.env.API_KEY

const moviesAPi = createApi({
    reducerPath: 'moviesAPi',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchPopularMovies: builder.query({
            query: () => {
                return {
                    url: '/movie/popular',
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchTopRatedMovies: builder.query({
            query: () => {
                return {
                    url: '/movie/top_rated',
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchNowPlayingMovies: builder.query({
            query: () => {
                return {
                    url: '/movie/now_playing',
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey
                    }
                }
            }
        }),

        fetchUpComingMovies: builder.query({
            query: () => {
                return {
                    url: '/movie/upcoming',
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey
                    }
                }
            }
        }),
    })
})

export const {
    useFetchPopularMoviesQuery,
    useFetchTopRatedMoviesQuery,
    useFetchNowPlayingMoviesQuery,
    useFetchUpComingMoviesQuery
} = moviesAPi
export default moviesAPi