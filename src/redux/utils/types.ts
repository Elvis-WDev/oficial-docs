import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';

/**
 * Define the AppThunk type using ThunkAction
 */
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

/**
 * Define the AppThunkDispatch type using ThunkDispatch
 */
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, Action>;