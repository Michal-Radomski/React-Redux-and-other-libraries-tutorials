import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const usersApi: Fetch = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

// console.log("usersApi:", usersApi);
export const {useGetUsersQuery} = usersApi;
