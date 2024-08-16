

import { AxiosError } from 'axios';
import { api_elvisdevdocs } from '../api/api_elvisdevdocs';
import { login, logout } from '../redux/auth/auth.slice';
import { AppThunk, AppThunkDispatch } from '../redux/utils/types';
import { removeUserFromLocalStorage, setUserLocalStorage } from '../services/persistUser.service';
import { fail, request, success } from '../redux/ui/ui.slice';

export const useAuth = () => {

    const AuthLogin = (username: string, password: string): AppThunk =>
        async (dispatch: AppThunkDispatch): Promise<void> => {
            try {
                dispatch(request());

                const { data } = await api_elvisdevdocs.post('/login', { username, password })

                dispatch(login(data));

                setUserLocalStorage(data);

                dispatch(success());

            } catch (error) {
                if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
            }
        };


    const AuthLogout =
        (): AppThunk =>
            async (dispatch: AppThunkDispatch): Promise<void> => {
                try {
                    dispatch(request());

                    removeUserFromLocalStorage();

                    dispatch(logout());

                    dispatch(success());

                } catch (error) {
                    if (error instanceof AxiosError) dispatch(fail(error.response instanceof Object && error.response.data instanceof Object && error.response.data.message))
                }
            };


    return {
        AuthLogin,
        AuthLogout
    };
}