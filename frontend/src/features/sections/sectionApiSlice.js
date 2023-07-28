import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/api"

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export const SectionApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllSections: builder.query({
            query: () => ({
                url: '/sections',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedUsers = responseData.map(section => {
                    section.id = section._id
                    return section
                });
                return sectionsAdapter.setAll(initialState, loadedSections)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Section', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Section', id }))
                    ]
                } else return [{ type: 'Section', id: 'LIST' }]
            }
        }),
        newSection: builder.mutation({
            query: prevSectionInfo => ({
                url: '/sections',
                method: 'POST',
                body: { ...prevSectionInfo }
            }),
            invalidatesTags: [
                { type: 'Section', id:'LIST' }
            ]
        }),
        updateSection: builder.mutation({
            query: prevSectionInfo => ({
                url: '/sections',
                method: 'PATCH',
                body: { ...prevSectionInfo }
            }),
            invalidatesTags: [
                { type: 'Section', id: arg.id}
            ]
        }),
        deleteOneSection: builder.mutation({
            query: ({ id }) => ({
                url: '/sections',
                method: 'DELETE',
                body: { id }
            })
        })
    })
})

export const {
    useGetAllSectionsQuery,
    useNewSectionMutation,
    useUpdateSectionMutation,
    useDeleteOneSectionMutation
} = SectionApiSlice

export const selectSectionsResult = SectionApiSlice.endpoints.getAllSections.select()