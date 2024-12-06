import { emptyApi as api } from './emptyApi';
export const addTagTypes = [
  'user',
  'news',
  'guide',
  'guide-category',
  'guide-step',
  'partner',
  'team-member',
  'location',
  'guide-comment',
] as const;
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
      getNews: build.query<GetNewsApiResponse, GetNewsApiArg>({
        query: () => ({ url: `/news` }),
        providesTags: ['news'],
      }),
      createGuide: build.mutation<CreateGuideApiResponse, CreateGuideApiArg>({
        query: (queryArg) => ({
          url: `/guides`,
          method: 'POST',
          body: queryArg.createGuideDto,
        }),
        invalidatesTags: ['guide'],
      }),
      getGuides: build.query<GetGuidesApiResponse, GetGuidesApiArg>({
        query: () => ({ url: `/guides` }),
        providesTags: ['guide'],
      }),
      getGuide: build.query<GetGuideApiResponse, GetGuideApiArg>({
        query: (queryArg) => ({ url: `/guides/${queryArg.id}` }),
        providesTags: ['guide'],
      }),
      updateGuide: build.mutation<UpdateGuideApiResponse, UpdateGuideApiArg>({
        query: (queryArg) => ({
          url: `/guides/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateGuideDto,
        }),
        invalidatesTags: ['guide'],
      }),
      deleteGuide: build.mutation<DeleteGuideApiResponse, DeleteGuideApiArg>({
        query: (queryArg) => ({
          url: `/guides/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['guide'],
      }),
      createGuideCategory: build.mutation<
        CreateGuideCategoryApiResponse,
        CreateGuideCategoryApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-categories`,
          method: 'POST',
          body: queryArg.createGuideCategoryDto,
        }),
        invalidatesTags: ['guide-category'],
      }),
      getGuideCategories: build.query<
        GetGuideCategoriesApiResponse,
        GetGuideCategoriesApiArg
      >({
        query: () => ({ url: `/guide-categories` }),
        providesTags: ['guide-category'],
      }),
      getGuideCategory: build.query<
        GetGuideCategoryApiResponse,
        GetGuideCategoryApiArg
      >({
        query: (queryArg) => ({ url: `/guide-categories/${queryArg.id}` }),
        providesTags: ['guide-category'],
      }),
      updateGuideCategory: build.mutation<
        UpdateGuideCategoryApiResponse,
        UpdateGuideCategoryApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-categories/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateGuideCategoryDto,
        }),
        invalidatesTags: ['guide-category'],
      }),
      deleteGuideCategory: build.mutation<
        DeleteGuideCategoryApiResponse,
        DeleteGuideCategoryApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-categories/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['guide-category'],
      }),
      createGuideStep: build.mutation<
        CreateGuideStepApiResponse,
        CreateGuideStepApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-steps`,
          method: 'POST',
          body: queryArg.createGuideStepDto,
        }),
        invalidatesTags: ['guide-step'],
      }),
      getGuideSteps: build.query<GetGuideStepsApiResponse, GetGuideStepsApiArg>(
        {
          query: () => ({ url: `/guide-steps` }),
          providesTags: ['guide-step'],
        },
      ),
      getGuideStep: build.query<GetGuideStepApiResponse, GetGuideStepApiArg>({
        query: (queryArg) => ({ url: `/guide-steps/${queryArg.id}` }),
        providesTags: ['guide-step'],
      }),
      updateGuideStep: build.mutation<
        UpdateGuideStepApiResponse,
        UpdateGuideStepApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-steps/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateGuideStepDto,
        }),
        invalidatesTags: ['guide-step'],
      }),
      deleteGuideStep: build.mutation<
        DeleteGuideStepApiResponse,
        DeleteGuideStepApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-steps/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['guide-step'],
      }),
      createPartner: build.mutation<
        CreatePartnerApiResponse,
        CreatePartnerApiArg
      >({
        query: (queryArg) => ({
          url: `/partners`,
          method: 'POST',
          body: queryArg.createPartnerDto,
        }),
        invalidatesTags: ['partner'],
      }),
      getPartners: build.query<GetPartnersApiResponse, GetPartnersApiArg>({
        query: () => ({ url: `/partners` }),
        providesTags: ['partner'],
      }),
      getPartner: build.query<GetPartnerApiResponse, GetPartnerApiArg>({
        query: (queryArg) => ({ url: `/partners/${queryArg.id}` }),
        providesTags: ['partner'],
      }),
      updatePartner: build.mutation<
        UpdatePartnerApiResponse,
        UpdatePartnerApiArg
      >({
        query: (queryArg) => ({
          url: `/partners/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updatePartnerDto,
        }),
        invalidatesTags: ['partner'],
      }),
      deletePartner: build.mutation<
        DeletePartnerApiResponse,
        DeletePartnerApiArg
      >({
        query: (queryArg) => ({
          url: `/partners/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['partner'],
      }),
      createTeamMember: build.mutation<
        CreateTeamMemberApiResponse,
        CreateTeamMemberApiArg
      >({
        query: (queryArg) => ({
          url: `/team-members`,
          method: 'POST',
          body: queryArg.createTeamMemberDto,
        }),
        invalidatesTags: ['team-member'],
      }),
      getTeamMembers: build.query<
        GetTeamMembersApiResponse,
        GetTeamMembersApiArg
      >({
        query: () => ({ url: `/team-members` }),
        providesTags: ['team-member'],
      }),
      getTeamMember: build.query<GetTeamMemberApiResponse, GetTeamMemberApiArg>(
        {
          query: (queryArg) => ({ url: `/team-members/${queryArg.id}` }),
          providesTags: ['team-member'],
        },
      ),
      updateTeamMember: build.mutation<
        UpdateTeamMemberApiResponse,
        UpdateTeamMemberApiArg
      >({
        query: (queryArg) => ({
          url: `/team-members/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateTeamMemberDto,
        }),
        invalidatesTags: ['team-member'],
      }),
      deleteTeamMember: build.mutation<
        DeleteTeamMemberApiResponse,
        DeleteTeamMemberApiArg
      >({
        query: (queryArg) => ({
          url: `/team-members/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['team-member'],
      }),
      createLocation: build.mutation<
        CreateLocationApiResponse,
        CreateLocationApiArg
      >({
        query: (queryArg) => ({
          url: `/locations`,
          method: 'POST',
          body: queryArg.createLocationDto,
        }),
        invalidatesTags: ['location'],
      }),
      getLocations: build.query<GetLocationsApiResponse, GetLocationsApiArg>({
        query: () => ({ url: `/locations` }),
        providesTags: ['location'],
      }),
      getLocation: build.query<GetLocationApiResponse, GetLocationApiArg>({
        query: (queryArg) => ({ url: `/locations/${queryArg.id}` }),
        providesTags: ['location'],
      }),
      updateLocation: build.mutation<
        UpdateLocationApiResponse,
        UpdateLocationApiArg
      >({
        query: (queryArg) => ({
          url: `/locations/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateLocationDto,
        }),
        invalidatesTags: ['location'],
      }),
      deleteLocation: build.mutation<
        DeleteLocationApiResponse,
        DeleteLocationApiArg
      >({
        query: (queryArg) => ({
          url: `/locations/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['location'],
      }),
      createGuideComment: build.mutation<
        CreateGuideCommentApiResponse,
        CreateGuideCommentApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-comments`,
          method: 'POST',
          body: queryArg.createGuideCommentDto,
        }),
        invalidatesTags: ['guide-comment'],
      }),
      getGuideComments: build.query<
        GetGuideCommentsApiResponse,
        GetGuideCommentsApiArg
      >({
        query: () => ({ url: `/guide-comments` }),
        providesTags: ['guide-comment'],
      }),
      getGuideComment: build.query<
        GetGuideCommentApiResponse,
        GetGuideCommentApiArg
      >({
        query: (queryArg) => ({ url: `/guide-comments/${queryArg.id}` }),
        providesTags: ['guide-comment'],
      }),
      updateGuideComment: build.mutation<
        UpdateGuideCommentApiResponse,
        UpdateGuideCommentApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-comments/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateGuideCommentDto,
        }),
        invalidatesTags: ['guide-comment'],
      }),
      deleteGuideComment: build.mutation<
        DeleteGuideCommentApiResponse,
        DeleteGuideCommentApiArg
      >({
        query: (queryArg) => ({
          url: `/guide-comments/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['guide-comment'],
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
export type GetNewsApiResponse = /** status 200  */ NewsResponseDto;
export type GetNewsApiArg = void;
export type CreateGuideApiResponse = /** status 200  */ GuideDto;
export type CreateGuideApiArg = {
  createGuideDto: CreateGuideDto;
};
export type GetGuidesApiResponse = /** status 200  */ GuideDto[];
export type GetGuidesApiArg = void;
export type GetGuideApiResponse = /** status 200  */ GuideDetailsDto;
export type GetGuideApiArg = {
  id: string;
};
export type UpdateGuideApiResponse = /** status 200  */ void;
export type UpdateGuideApiArg = {
  id: string;
  updateGuideDto: UpdateGuideDto;
};
export type DeleteGuideApiResponse = /** status 200  */ void;
export type DeleteGuideApiArg = {
  id: string;
};
export type CreateGuideCategoryApiResponse =
  /** status 200  */ GuideCategoryDto;
export type CreateGuideCategoryApiArg = {
  createGuideCategoryDto: CreateGuideCategoryDto;
};
export type GetGuideCategoriesApiResponse =
  /** status 200  */ GuideCategoryDto[];
export type GetGuideCategoriesApiArg = void;
export type GetGuideCategoryApiResponse = /** status 200  */ GuideCategoryDto;
export type GetGuideCategoryApiArg = {
  id: string;
};
export type UpdateGuideCategoryApiResponse = /** status 200  */ void;
export type UpdateGuideCategoryApiArg = {
  id: string;
  updateGuideCategoryDto: UpdateGuideCategoryDto;
};
export type DeleteGuideCategoryApiResponse = /** status 200  */ void;
export type DeleteGuideCategoryApiArg = {
  id: string;
};
export type CreateGuideStepApiResponse = /** status 200  */ GuideStepDto;
export type CreateGuideStepApiArg = {
  createGuideStepDto: CreateGuideStepDto;
};
export type GetGuideStepsApiResponse = /** status 200  */ GuideStepDto[];
export type GetGuideStepsApiArg = void;
export type GetGuideStepApiResponse = /** status 200  */ GuideStepDto;
export type GetGuideStepApiArg = {
  id: string;
};
export type UpdateGuideStepApiResponse = /** status 200  */ void;
export type UpdateGuideStepApiArg = {
  id: string;
  updateGuideStepDto: UpdateGuideStepDto;
};
export type DeleteGuideStepApiResponse = /** status 200  */ void;
export type DeleteGuideStepApiArg = {
  id: string;
};
export type CreatePartnerApiResponse = /** status 200  */ PartnerDto;
export type CreatePartnerApiArg = {
  createPartnerDto: CreatePartnerDto;
};
export type GetPartnersApiResponse = /** status 200  */ PartnerDto[];
export type GetPartnersApiArg = void;
export type GetPartnerApiResponse = /** status 200  */ PartnerDto;
export type GetPartnerApiArg = {
  id: string;
};
export type UpdatePartnerApiResponse = /** status 200  */ void;
export type UpdatePartnerApiArg = {
  id: string;
  updatePartnerDto: UpdatePartnerDto;
};
export type DeletePartnerApiResponse = /** status 200  */ void;
export type DeletePartnerApiArg = {
  id: string;
};
export type CreateTeamMemberApiResponse = /** status 200  */ TeamMemberDto;
export type CreateTeamMemberApiArg = {
  createTeamMemberDto: CreateTeamMemberDto;
};
export type GetTeamMembersApiResponse = /** status 200  */ TeamMemberDto[];
export type GetTeamMembersApiArg = void;
export type GetTeamMemberApiResponse = /** status 200  */ TeamMemberDto;
export type GetTeamMemberApiArg = {
  id: string;
};
export type UpdateTeamMemberApiResponse = /** status 200  */ void;
export type UpdateTeamMemberApiArg = {
  id: string;
  updateTeamMemberDto: UpdateTeamMemberDto;
};
export type DeleteTeamMemberApiResponse = /** status 200  */ void;
export type DeleteTeamMemberApiArg = {
  id: string;
};
export type CreateLocationApiResponse = /** status 200  */ LocationDto;
export type CreateLocationApiArg = {
  createLocationDto: CreateLocationDto;
};
export type GetLocationsApiResponse = /** status 200  */ LocationDto[];
export type GetLocationsApiArg = void;
export type GetLocationApiResponse = /** status 200  */ LocationDto;
export type GetLocationApiArg = {
  id: string;
};
export type UpdateLocationApiResponse = /** status 200  */ void;
export type UpdateLocationApiArg = {
  id: string;
  updateLocationDto: UpdateLocationDto;
};
export type DeleteLocationApiResponse = /** status 200  */ void;
export type DeleteLocationApiArg = {
  id: string;
};
export type CreateGuideCommentApiResponse = /** status 200  */ GuideCommentDto;
export type CreateGuideCommentApiArg = {
  createGuideCommentDto: CreateGuideCommentDto;
};
export type GetGuideCommentsApiResponse = /** status 200  */ GuideCommentDto[];
export type GetGuideCommentsApiArg = void;
export type GetGuideCommentApiResponse = /** status 200  */ GuideCommentDto;
export type GetGuideCommentApiArg = {
  id: string;
};
export type UpdateGuideCommentApiResponse = /** status 200  */ void;
export type UpdateGuideCommentApiArg = {
  id: string;
  updateGuideCommentDto: UpdateGuideCommentDto;
};
export type DeleteGuideCommentApiResponse = /** status 200  */ void;
export type DeleteGuideCommentApiArg = {
  id: string;
};
export type UserDto = {
  /** The id of the user */
  id: string;
  /** Username of the user */
  userName: string;
  /** The name of the user */
  email: string;
  /** Role of the user */
  role: string;
};
export type SignupResponseDto = {
  accessToken: string;
  user: UserDto;
};
export type ApiErrorDto = {
  /** The error code */
  code?:
    | 'internal'
    | 'entity-not-found'
    | 'email-not-unique'
    | 'unauthorized'
    | 'forbidden';
  /** A human-readable message describing the error */
  message: string;
  /** Additional details about the error */
  details?: object;
};
export type SignupRequestDto = {
  userName: string;
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
export type NewsDto = {
  /** The id of the news */
  id: string;
  /** Title of the news */
  title: string;
  /** Images from news */
  image: string[];
  /** Text of news */
  description: string;
  /** Author of the news */
  author: string;
  /** Date of the news */
  date: string;
};
export type NewsResponseDto = {
  news: NewsDto[];
};
export type GuideDto = {
  id: string;
  title: string;
  description: string;
  date: string;
  exampleImages: string[];
  videoUrl: string;
  author: UserDto;
  schemas: string[];
};
export type CreateGuideStepDto = {
  name: string;
  description: string;
  image: string;
  order: number;
};
export type CreateGuideDto = {
  title: string;
  description: string;
  exampleImages: string[];
  videoUrl: string;
  categories: string[];
  steps: CreateGuideStepDto[];
  schemas: string[];
};
export type GuideStepDto = {
  id: string;
  name: string;
  description: string;
  image: string;
  order: number;
};
export type GuideCommentDto = {
  id: string;
  text: string;
  author: string;
};
export type GuideDetailsDto = {
  id: string;
  title: string;
  description: string;
  date: string;
  exampleImages: string[];
  schemas: string[];
  videoUrl: string;
  steps: GuideStepDto[];
  author: UserDto;
  comments: GuideCommentDto[];
};
export type UpdateGuideDto = {
  title?: string;
  description?: string;
  exampleImages?: string[];
  videoUrl?: string;
  categories?: string[];
  schemas: string[];
};
export type GuideCategoryDto = {
  id: string;
  name: string;
};
export type CreateGuideCategoryDto = {
  name: string;
};
export type UpdateGuideCategoryDto = {
  name?: string;
};
export type UpdateGuideStepDto = {
  name?: string;
  description?: string;
  image?: string;
  order?: number;
};
export type PartnerDto = {
  id: string;
  name: string;
};
export type CreatePartnerDto = {
  name: string;
};
export type UpdatePartnerDto = {
  name?: string;
};
export type TeamMemberDto = {
  id: string;
  fullName: string;
  imageUrl: string;
  position: string;
};
export type CreateTeamMemberDto = {
  fullName: string;
  imageUrl: string;
  position: string;
};
export type UpdateTeamMemberDto = {
  fullName?: string;
  imageUrl?: string;
  position?: string;
};
export type LocationDto = {
  id: string;
  title: string;
  lat: number;
  lng: number;
  contactFullName: string;
  contactPhoneNumber: string;
};
export type CreateLocationDto = {
  title: string;
  lat: number;
  lng: number;
  contactFullName: string;
  contactPhoneNumber: string;
};
export type UpdateLocationDto = {
  title?: string;
  lat?: number;
  lng?: number;
  contactFullName?: string;
  contactPhoneNumber?: string;
};
export type CreateGuideCommentDto = {
  text: string;
  guideId: string;
};
export type UpdateGuideCommentDto = {
  text?: string;
};
export const {
  useSignupMutation,
  useLoginMutation,
  useGetMeQuery,
  useGetNewsQuery,
  useCreateGuideMutation,
  useGetGuidesQuery,
  useGetGuideQuery,
  useUpdateGuideMutation,
  useDeleteGuideMutation,
  useCreateGuideCategoryMutation,
  useGetGuideCategoriesQuery,
  useGetGuideCategoryQuery,
  useUpdateGuideCategoryMutation,
  useDeleteGuideCategoryMutation,
  useCreateGuideStepMutation,
  useGetGuideStepsQuery,
  useGetGuideStepQuery,
  useUpdateGuideStepMutation,
  useDeleteGuideStepMutation,
  useCreatePartnerMutation,
  useGetPartnersQuery,
  useGetPartnerQuery,
  useUpdatePartnerMutation,
  useDeletePartnerMutation,
  useCreateTeamMemberMutation,
  useGetTeamMembersQuery,
  useGetTeamMemberQuery,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useCreateLocationMutation,
  useGetLocationsQuery,
  useGetLocationQuery,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
  useCreateGuideCommentMutation,
  useGetGuideCommentsQuery,
  useGetGuideCommentQuery,
  useUpdateGuideCommentMutation,
  useDeleteGuideCommentMutation,
} = injectedRtkApi;
