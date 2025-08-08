import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp } from "@/types";




const authApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        register: builder.mutation({
            query: (userInfo)=>({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            })
        }),
        login: builder.mutation({
            query: (userInfo)=>({
                url: "/user/login",
                method: "POST",
                data: userInfo,
            })
        }),
        sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
            query: (userInfo)=>({
                url: "/otp/send",
                method: "POST",
                data: userInfo,
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation, useSendOtpMutation} = authApi