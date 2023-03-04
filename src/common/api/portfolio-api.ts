import axios from 'axios'
import {FormikType} from '../../contacts/Contacts';

const instance = axios.create({
    //baseURL: 'http://localhost:3010/',
    baseURL: 'https://portfolio-gmail-smtp-sage.vercel.app/'
})

// api
export const portfolioAPI = {
    sendMessage(values: FormikType) {
        return instance.post('sendMessage', values);
    }
}



