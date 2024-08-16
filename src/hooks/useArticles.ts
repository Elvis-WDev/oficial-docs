

import { AxiosError } from 'axios';
import { api_elvisdevdocs } from '../api/api_elvisdevdocs';
import { AppThunk, AppThunkDispatch } from '../redux/utils/types';
import { fail, onSelectedArticle, onSelectedCategory, request, success, } from '../redux/ui/ui.slice';
import { onGetUserArticlesByCategory } from '../redux/articles/articles.slice';
import { Category } from '../models/category.model';
import { Article } from '../models/article.model';

export const useArticles = () => {

    const GetUserArticlesByCategory = (id: number): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {
            try {
                dispatch(request());

                const { data } = await api_elvisdevdocs.get(`/categories/${id}/articles`)

                dispatch(onGetUserArticlesByCategory(data));

                dispatch(success());

            } catch (error) {
                if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
            }
        };
    const SelectArticleById = (id: number, id_article: number, name: string, description: string, icon: string, articles: Article[]): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {

            dispatch(request());


            const selected: Category = {

                id: id,
                name: name,
                description: description,
                icon: icon,
                articles: articles

            }

            dispatch(onSelectedCategory(selected));

            dispatch(onSelectedArticle(id_article));

            dispatch(success());

        };
    const StoreArticle = (user_id: number, title: string, description: string, content: string, id_category: string): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {

            dispatch(request());

            const { data } = await api_elvisdevdocs.post('categories/articles/create', { user_id, title, description, content, id_category })

            console.log(data)

            dispatch(success());

        };

    const EditArticle = (id: number, title: string, description: string, content: string): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {

            dispatch(request());

            const { data } = await api_elvisdevdocs.put('categories/articles/edit', { id, title, description, content })

            console.log(data)

            dispatch(success());

        };

    const DeleteArticle = (id: number): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {

            dispatch(request());

            const { data } = await api_elvisdevdocs.get(`categories/articles/destroy/${id}`)

            console.log(data)

            dispatch(success());

        };

    return {
        GetUserArticlesByCategory,
        SelectArticleById,
        StoreArticle,
        DeleteArticle,
        EditArticle
    };
}