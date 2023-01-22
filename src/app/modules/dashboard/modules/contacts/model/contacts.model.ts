export interface Contact {
    fullname: string;
    contacts: ContactsMetaData[];
    photoUrl: string;
    description: string;

    type: ContactType;
    id: string;
}

export type ContactType = 'Home' | 'Office';

export interface ContactsMetaData {
    phoneNumber: number;
    email: string;
}
