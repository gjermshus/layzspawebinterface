import { atom } from 'recoil';

const appConfigState = atom({
    key: 'appConfigState',
    default: {
        language: 'en',
        dateFormat: 'DD/MM/YYYY',
        automaticTimezone: true,
    },
});
