// import { loginUser } from "../features/auth/slice.ts";

import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
        reducerPath: 'api',
        baseQuery: fakeBaseQuery(),
        tagTypes: [],
        endpoints: (builder) => ({
                login: builder.mutation<{token: string}, {email: string, password: string}>({
                    // @ts-ignore
                        queryFn: async(body: {email: string, password: string}, api, extraOptions) => {
                        try {
                            // login things here
                            // const reponse = await backendService.login(body);
                            // api.dispatch(loginUser({user: reponse.user, token: reponse.token}))
                                
                        } catch (error) {
                                return {error: error}
                        }
                        }
                }),

                 
        })

})