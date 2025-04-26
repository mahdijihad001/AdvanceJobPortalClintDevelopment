import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseUrl from "../../../Utils/BaseUrl/BaseUrl";

const JobApi = createApi({
    reducerPath : "JobApi",
    tagTypes : ["jobApi"],
    baseQuery : fetchBaseQuery({baseUrl : `${BaseUrl()}/job`}),
    endpoints : (builder) =>({
        postJob : builder.mutation({
            query : (data) =>({
                url : `/create`,
                method : "POST",
                body : data
            })
        })
    })
});


export const {usePostJobMutation} = JobApi;
export default JobApi;