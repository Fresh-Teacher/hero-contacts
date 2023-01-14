import { createReducer } from '@ngrx/store';
import { IUserState } from './auth.model';

const initialState: IUserState = {
    user: null,
    isError: false,
    isLoading: false,
    message: 'Initial State',
};

const authReducer = createReducer(initialState);
