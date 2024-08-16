import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "./auth/auth.slice";
import { UiReducer } from "./ui/ui.slice";
import { categoriesReducer } from "./categories/categories.slice";
import { articlesReducer } from "./articles/articles.slice";

const dataReducer = combineReducers({
    categories: categoriesReducer,
    articles: articlesReducer,
});

const store = configureStore({
    reducer: {
        ui: UiReducer,
        authentication: authenticationReducer,
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;