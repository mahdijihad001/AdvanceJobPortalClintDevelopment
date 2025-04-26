
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BaseUrl from './../../../Utils/BaseUrl/BaseUrl';

const CompanyApi = createApi({
    reducerPath : "ConpanyApi",
    tagTypes : ["CompanyApi"],
    baseQuery : fetchBaseQuery({baseUrl : `${BaseUrl()}`}),
    endpoints : (builder) =>({
        createCompany : builder.mutation({
            query :  ({id , data}) =>({
                url : ``,
                method : "PATCH",
                body : data
            })
        }),
        getCompany : builder.query({
            query : (id) =>({
                url : ``,
                method : "GET"
            })
        })
    })
});


export const {useCreateCompanyMutation , useGetCompanyQuery} = CompanyApi;

export default CompanyApi