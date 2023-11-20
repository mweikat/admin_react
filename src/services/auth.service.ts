import http from '../commons/axios/publicAxios';
import LoginModel from "../models/login";
import UserModel from "../models/user";


class AuthService {

    version = import.meta.env.VITE_API_V1;

     create(data:UserModel){
        return http.post(`${this.version}/auth/register`,data)
    }

    login(data:LoginModel){
        return http.post<JSON>(`${this.version}/auth/login`,data);
    }

    isLoggued(){
        if(localStorage.getItem('access_token'))
            return true;
        else
            return false;
    }

    logout(){
        localStorage.removeItem('access_token');    
        this.goTologinPage();
    }

    private goTologinPage(){
        window.location.href='/auth/login'
    }

}

export default new AuthService();