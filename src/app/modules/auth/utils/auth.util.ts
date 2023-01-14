import { FirebaseLoginError, FirebaseErrorMessage } from './auth.enums';
export const errorGenerator = (message: string): string => {
    switch (message) {
        case FirebaseLoginError.EMAIL_ALREADY_EXIST:
            return FirebaseErrorMessage.EMAIL_EXISTS;
        default:
            return message;
    }
};

const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100000 + 1);
};

export const randomAvatarUrlGenerator = () => {
    return `https://avatars.dicebear.com/api/big-ears-neutral/${randomNumberGenerator()}.svg`;
};
