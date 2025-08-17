import { baseApi } from "@/redux/baseApi";


export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
   
  }),
});

export const {
  useRegisterMutation,
  useUserInfoQuery,
} = tourApi;
