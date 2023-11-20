
import { useEffect, useState } from "react";
import { ChangePass } from "./changePass";
import { UserForm } from "./userForm";
import UserModel from "../../../models/user";
import UserService from "../../../services/userService";

export const MyAccount = () => {

    const[user,setUser] = useState<UserModel>({name:"",lastName:"",email:""});

    useEffect( ()=>{

        (async () => {
            const data = await UserService.getUserInfo();
            setUser(data);
         })();
        
    },[]);


    return(
        <div className="container">
            <h2>José Luis Ramírez</h2>
            <div className="row">
                <UserForm user={user}></UserForm>
            </div>
            <br/>
            <div className="row">
                <ChangePass></ChangePass>
            </div>
        </div>)
}