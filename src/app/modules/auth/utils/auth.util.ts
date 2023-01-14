import { FirebaseLoginError, FirebaseErrorMessage } from './auth.enums';
export const errorGenerator = (message: string): string => {
    switch (message) {
        case FirebaseLoginError.EMAIL_ALREADY_EXIST:
            return FirebaseErrorMessage.EMAIL_EXISTS;
        default:
            return message;
    }
};
