import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ICatalog} from "../models/ICatalog";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://express-shina.ru/vacancy/'}),
    endpoints: (build) => ({
        getCatalog: build.query<ICatalog>({
            query: () => ({
                url: 'catalog'
            })
        }),
    }),
})

export const {useGetCatalogQuery} = catalogApi