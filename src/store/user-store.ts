import type { User } from '@auth0/auth0-spa-js';
import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export type SetterResponse = 'ok' | 'failed';

export type UserStore = {
    user?: User;
    modal: boolean;
    loading: boolean;
    isPaid: boolean;
};

export const store = map<UserStore>({} as UserStore);

export const setUser = (user: User): SetterResponse => {
    const cUser = store.get().user;
    if (cUser) return 'failed';
    store.setKey('user', user);
    return 'ok';
};

export const setLoading = (value: boolean): void => {
    store.setKey('loading', value);
};

export const setIsPaid = (value: boolean): void => {
    store.setKey('isPaid', value);
};

export const setModal = (value: boolean): void => {
    store.setKey('modal', value);
};
