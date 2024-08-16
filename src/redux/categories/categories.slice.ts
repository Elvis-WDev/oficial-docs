import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category } from "../../models/category.model";

const initialState: Category[] = [];

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        onGetUserCategories(state, action: PayloadAction<Category[]>) {

            console.log(state)
            return action.payload;

        },
    },
});

export const { onGetUserCategories } = categoriesSlice.actions;
export const selectCategories = (state: RootState): Category[] => state.data.categories;
export const categoriesReducer = categoriesSlice.reducer;