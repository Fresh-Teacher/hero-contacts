import { User } from '@angular/fire/auth';

export interface IUserState {
    user: User | null;
    isLoading: boolean;
    message: string;
    isError: boolean;
}

export interface IPayload {
    user: User;
}

export enum AuthActions {
    USER_SIGNUP_START = 'USER_SIGNUP_START',
    USER_SIGNUP_SUCCCESS = 'USER_SIGNUP_SUCCCESS',
    USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL',

    USER_LOGIN_START = 'USER_LOGIN_START',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',

    USER_SIGNOUT_START = 'USER_SIGNOUT_START',
    USER_SIGNOUT_SUCCESS = 'USER_SIGNOUT_SUCCESS',
    USER_SIGNOUT_FAIL = 'USER_SIGNOUT_FAIL',

    USER_LOAD_START = 'USER_LOAD_START',
    USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS',
    USER_LOAD_FAIL = 'USER_LOAD_FAIL',
}

export interface IAction {
    type: AuthActions;
    payload: IPayload | null;
    error?: any;
}
