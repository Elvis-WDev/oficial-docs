import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category } from "../../models/category.model";
import { Article } from "../../models/article.model";

export interface UiState {
    isLoading: boolean;
    mode?: boolean;
    error?: any;
    selected_category: Category,
    selected_article: Article,
}

const defaultCategory: Category = {
    id: 0,
    name: '',
    description: '',
    icon: '',
    articles: [],
};

const defaultArticle: Article = {
    id: 0,
    title: '',
    description: '',
    content: '',
    created_at: '',
    updated_at: '',
};

const initialState: UiState = {
    isLoading: false,
    mode: false,
    selected_category: defaultCategory,
    selected_article: defaultArticle,
};

export const UISlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        request(state) {
            state.isLoading = true;
        },
        success(state) {
            state.isLoading = false;
        },
        fail(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        onSelectedCategory(state, action: PayloadAction<Category>) {
            state.selected_category = action.payload
        },
        onSelectedArticle(state, action: PayloadAction<number>) {
            const id = action.payload;
            const article = state.selected_category.articles.find(article => article.id === id);
            state.selected_article = article || defaultArticle;
        },
        onSelectMode(state, action: PayloadAction<boolean>) {
            localStorage.setItem("darkMode", JSON.stringify(action.payload));
            state.mode = action.payload;
        }
    },
});

export const { request, success, fail, onSelectedCategory, onSelectedArticle, onSelectMode } = UISlice.actions;
export const selectUI = (state: RootState): UiState => state.ui;
export const selected_category = (state: RootState): Category => state.ui.selected_category;
export const selected_article = (state: RootState): Article => state.ui.selected_article;
export const UiReducer = UISlice.reducer;
