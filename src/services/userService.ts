import http from '../commons/axios/privateAxios'

class UserService {

    version = import.meta.env.VITE_API_V1;

    getUserInfo(){
        return http.get(`${this.version}/user`)
    }

}

export default UserService;