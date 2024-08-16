

import { AxiosError } from 'axios';
import { api_elvisdevdocs } from '../api/api_elvisdevdocs';
import { AppThunk, AppThunkDispatch } from '../redux/utils/types';
import { fail, request, success, } from '../redux/ui/ui.slice';
import { onGetUserCategories } from '../redux/categories/categories.slice';

export const useCategories = () => {


    const GetUserCategories = (): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {
            try {
                dispatch(request());

                const { data } = await api_elvisdevdocs.get('/categories')

                dispatch(onGetUserCategories(data));

                dispatch(success());

            } catch (error) {
                if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
            }
        };

    const StoreCategories = (user_id: number, name: string, description: string, icon: string): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {
            try {
                dispatch(request());

                const { data } = await api_elvisdevdocs.post('categories/create', { user_id, name, description, icon })

                console.log(data)

                dispatch(success());

            } catch (error) {
                if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
            }
        };

    const EditCategories = (id: number, name: string, description: string, icon: string): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {
            try {
                dispatch(request());

                const { data } = await api_elvisdevdocs.put('categories/edit', { id, name, description, icon })

                console.log(data)

                dispatch(success());

            } catch (error) {
                if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
            }
        };

    const DeleteCategory = (id: number): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {
            try {
                dispatch(request());

                const { data } = await api_elvisdevdocs.get(`categories/destroy/${id}`)

                console.log(data)

                dispatch(success());

            } catch (error) {
                if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
            }
        };

    return {
        GetUserCategories,
        StoreCategories,
        DeleteCategory,
        EditCategories
    };
}