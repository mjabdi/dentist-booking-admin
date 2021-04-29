import API from './api';

export default class UserService{

    static setToken = (token) =>
    {
        this.token = token
    }
  
    static signIn = (payload) =>
    {
        return  API.post('/api/dentist/user/signin', payload)
    }

    static checkToken = (payload) =>
    {
        return  API.post('/api/dentist/user/checktoken', payload)
    }

}
