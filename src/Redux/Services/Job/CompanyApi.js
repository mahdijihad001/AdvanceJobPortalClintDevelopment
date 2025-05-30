
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BaseUrl from './../../../Utils/BaseUrl/BaseUrl';

const CompanyApi = createApi({
    reducerPath : "CompanyApi",
    tagTypes : ["CompanyApi"],
    baseQuery : fetchBaseQuery({baseUrl : `${BaseUrl()}/company`}),
    endpoints : (builder) =>({
        createCompany : builder.mutation({
            query :  ({id , data}) =>({
                url : `/update/${id}`,
                method : "PATCH",
                body : data
            }),
            invalidatesTags : (result , error , id) => [{type : "CompanyApi" , id}] 
        }),
        getCompany : builder.query({
            query : (id) =>({
                url : `/single/${id}`,
                method : "GET"
            }),
            providesTags : (result , error , id) => [{type : "CompanyApi" , id}]
        }),
        updateCompanySocial : builder.mutation({
            query : ({id , data}) =>({
                url : `/social/${id}`,
                method : "PATCH",
                body : data
            }),
            invalidatesTags : (result , error , id) => [{type : "CompanyApi" , id}]
        }),
        updateCompanyAddress : builder.mutation({
            query : ({id , data}) =>({
                url : `/address/${id}`,
                method : "PATCH",
                body : data
            }),
            invalidatesTags : (result , error , id) => [{type : "CompanyApi" , id}]
        })
    })
});


export const {useCreateCompanyMutation , useGetCompanyQuery , useUpdateCompanySocialMutation , useUpdateCompanyAddressMutation} = CompanyApi;

export default CompanyApi