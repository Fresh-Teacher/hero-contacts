export interface Contact {
    name: string;
    contacts: ContactsMetaData[];
    photoUrl: string;
    description: string;

    status: Contactstatus;
    id: string;
}

export type Contactstatus = 'active' | 'inactive';

export interface ContactsMetaData {
    phone: number;
    email: string;
}

export enum COLLECTIONS {
    CONTACTS = 'contacts',
    USERS = 'Users',
}
