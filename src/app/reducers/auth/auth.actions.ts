import { createAction, props } from '@ngrx/store';

export const login = createAction(
    'Login',
    props<{ username: string; password: string }>()
);

export const signup = createAction(
    'Signup',
    props<{ username: string; password: string }>()
);
