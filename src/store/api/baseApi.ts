import { logout } from '@store/features/auth';
import { emptyApi as api } from './emptyApi';
export const addTagTypes = ['user'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      login: build.mutation<LoginApiResponse, LoginApiArg>({
        query: (queryArg) => ({
          url: `/login`,
          method: 'POST',
          body: queryArg.loginRequestDto,
        }),
        invalidatesTags: ['user'],
        onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
          try {
            const { data } = await queryFulfilled;
            if (data.user.role !== 'admin') {
              console.error('Unauthorized role');
              dispatch(logout());
            }
          } catch (error) {
            console.error('Error during login:', error);
          }
        },
      }),
      getMe: build.query<GetMeApiResponse, GetMeApiArg>({
        query: () => ({ url: `/me` }),
        providesTags: ['user'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as baseApi };

export type LoginApiResponse = /** status 200  */ LoginResponseDto;
export type LoginApiArg = {
  loginRequestDto: LoginRequestDto;
};
export type GetMeApiResponse = /** status 200  */ UserDto;
export type GetMeApiArg = void;
export type UserDto = {
  /** The id of the user */
  id: string;
  /** The name of the user */
  userName: string;
  /** The name of the user */
  email: string;
  /** The role of the user */
  role: string;
};
export type ApiErrorDto = {
  /** The error code */
  code?: 'internal' | 'entity-not-found' | 'email-not-unique' | 'unauthorized';
  /** A human-readable message describing the error */
  message: string;
  /** Additional details about the error */
  details?: object;
};
export type LoginResponseDto = {
  accessToken: string;
  user: UserDto;
};
export type LoginRequestDto = {
  email: string;
  password: string;
};
export const { useLoginMutation, useGetMeQuery } = injectedRtkApi;
