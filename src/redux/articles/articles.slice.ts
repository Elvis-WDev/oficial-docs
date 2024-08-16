import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category } from "../../models/category.model";

const initialState: Category = {
    id: 0,
    name: '',
    description: '',
    icon: '',
    articles: [],
};

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        onGetUserArticlesByCategory(state, action: PayloadAction<Category>) {

            state.id = action.payload.id
            state.name = action.payload.name
            state.description = action.payload.description
            state.icon = action.payload.icon
            state.articles = action.payload.articles

        }
    },
});

export const { onGetUserArticlesByCategory } = articlesSlice.actions;
export const selectArticles = (state: RootState): Category => state.data.articles;
export const articlesReducer = articlesSlice.reducer;