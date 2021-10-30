import axios from 'axios';

const baseDonmain = 'http://localhost:3000';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${ baseDonmain }`;
export const currentDemo = 5;
export const storeID = 'nappies';
export const publicKey = 'pk_vB9yeQNOOVCUNY41EAhZe5iMja7D1Y2S';

export default axios.create({
    baseUrl,
    headers: customHeader
})