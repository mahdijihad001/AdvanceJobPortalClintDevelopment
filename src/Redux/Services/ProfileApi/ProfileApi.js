import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseUrl from "../../../Utils/BaseUrl/BaseUrl";

const profileApi = createApi({
    reducerPath : "ProfileApi",
    baseQuery : fetchBaseQuery({baseUrl : `${BaseUrl()}/profile`}),
    tagTypes : ["profile"],
    endpoints : (builder) =>({
        getSingleUserProfiole : builder.query({
            query : (id) =>({
                url : `/single/${id}`,
                method : "GET"
            }),
            providesTags : (result , error , id) => [{type : "profile" , id}]
        }),
        updateUserProfile : builder.mutation({
            query : ({id , data}) =>({
                url : `/update/${id}`,
                method : "PATCH",
                body : data
            }),
            invalidatesTags : (result , error , {id}) => [{type : "profile" , id}]
        })
    })
});



export const {useGetSingleUserProfioleQuery , useUpdateUserProfileMutation} = profileApi
export default profileApi