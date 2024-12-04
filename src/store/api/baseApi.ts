import { emptyApi as api } from './emptyApi';
export const addTagTypes = ['user'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      signup: build.mutation<SignupApiResponse, SignupApiArg>({
        query: (queryArg) => ({
          url: `/signup`,
          method: 'POST',
          body: queryArg.signupRequestDto,
        }),
        invalidatesTags: ['user'],
      }),
      login: build.mutation<LoginApiResponse, LoginApiArg>({
        query: (queryArg) => ({
          url: `/login`,
          method: 'POST',
          body: queryArg.loginRequestDto,
        }),
        invalidatesTags: ['user'],
      }),
      getMe: build.query<GetMeApiResponse, GetMeApiArg>({
        query: () => ({ url: `/me` }),
        providesTags: ['user'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as baseApi };
export type SignupApiResponse = /** status 200  */ SignupResponseDto;
export type SignupApiArg = {
  signupRequestDto: SignupRequestDto;
};
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
  email: string;
};
export type SignupResponseDto = {
  accessToken: string;
  user: UserDto;
};
export type ApiErrorDto = {
  /** The error code */
  code?: 'internal' | 'entity-not-found' | 'email-not-unique' | 'unauthorized';
  /** A human-readable message describing the error */
  message: string;
  /** Additional details about the error */
  details?: object;
};
export type SignupRequestDto = {
  email: string;
  password: string;
};
export type LoginResponseDto = {
  accessToken: string;
  user: UserDto;
};
export type LoginRequestDto = {
  email: string;
  password: string;
};
export const { useSignupMutation, useLoginMutation, useGetMeQuery } =
  injectedRtkApi;
