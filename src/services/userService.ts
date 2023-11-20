import http from '../commons/axios/privateAxios'
import UserModel from "../models/user";

class UserService {

    version = import.meta.env.VITE_API_V1;

    async getUserInfo(){

        const user = await http.get<UserModel>(`${this.version}/user`).then((response) => {
            return response.data;
        });
    
        return user;
    }

}

export default new UserService();